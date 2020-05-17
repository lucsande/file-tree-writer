import React, { createContext, useState, useCallback, useContext } from "react";
// import exampleFileTree from "../utils/exampleFileTree";
import exampleFileTree from "../utils/testFileTree";

const fileTreeContext = createContext(null);

const FileTreeProvider = ({ children }) => {
  const [fileTree, setFileTree] = useState(exampleFileTree);
  const nodesMetadata = ["_name", "_type", "_nodePath", "_nextChildIndex"];

  const accessNode = useCallback(
    nodePath => {
      const nodesArray = nodePath.split("-");
      let nodeToAccess = fileTree;

      nodesArray.forEach(node => {
        if (nodeToAccess.hasOwnProperty(node) && typeof nodeToAccess[node] === "object") {
          nodeToAccess = nodeToAccess[node];
        } else {
          console.log(nodeToAccess, node);
          throw new Error("nodePath couldn't be resolved");
        }
      });

      return nodeToAccess;
    },
    [fileTree]
  );

  // folders come before files. Folders are in alphabetical order, files are in alphabetical order too
  const sortChildren = useCallback(children => {
    const sortedChildren = children.sort((a, b) => {
      const aIsFolder = a._type === "folder";
      const bIsFolder = b._type === "folder";

      if (aIsFolder && !bIsFolder) {
        return -1;
      } else if (!aIsFolder && bIsFolder) {
        return 1;
      } else {
        return a._name < b._name ? -1 : 1;
      }
    });

    return sortedChildren;
  }, []);

  const getNodeChildren = useCallback(
    parentNode => {
      if (parentNode._type === "file") return [];

      const parentNodeEntries = Object.entries(parentNode);
      const children = parentNodeEntries.map(entry => {
        const entryName = entry[0];
        const child = entry[1];
        if (nodesMetadata.includes(entryName)) return undefined;

        return child;
      });

      const filteredChildren = children.filter(child => child !== undefined);
      const sortedChildren = sortChildren(filteredChildren);

      return sortedChildren;
    },
    [sortChildren, nodesMetadata]
  );

  // updates a node and all its children's nodePaths
  // recursion is neccessary because every time a node's nodePath changes, its children must be updated as well
  const updateNodePath = useCallback(
    ({ node, nodePath }) => {
      node._nodePath = nodePath;
      const children = getNodeChildren(node);

      // duplicate all children with an updated nodePath and delete original children
      children.forEach(child => {
        const previousIndex = child._nodePath.split("-").pop();
        const newIndex = node._nextChildIndex;
        
        node[newIndex] = updateNodePath({ node: child, nodePath: `${nodePath}-${newIndex}` });
        delete node[previousIndex];
        
        node._nextChildIndex += 1;
      });

      return node;
    },
    [getNodeChildren]
  );

  const addNode = useCallback(
    ({ parentPath, type, newNode = null }) => {
      const parent = accessNode(parentPath);
      const index = parent._nextChildIndex;
      parent._nextChildIndex += 1;
      const nodePath = parentPath + "-" + index;

      if (newNode) {
        const updatedNode = updateNodePath({ node: newNode, nodePath });
        parent[index] = { ...updatedNode };
      } else {
        parent[index] = { _name: "", _type: type, _nodePath: nodePath };
        if (type === "folder") parent[index]._nextChildIndex = 0;
      }

      return parent[index];
    },
    [accessNode, updateNodePath]
  );

  const addToFileTree = useCallback(
    ({ parentPath, type }) => {
      const newNode = addNode({ parentPath, type });

      setFileTree({ ...fileTree });
      console.log(fileTree);
      return newNode;
    },
    [addNode, fileTree]
  );

  const removeNode = useCallback(
    ({ nodePath }) => {
      if (nodePath === "root") {
        fileTree.root = { _name: "root", _type: "folder", _nodePath: "root", _nextChildIndex: 0 };
        return;
      }

      const pathArray = nodePath.split("-");
      const nodeIndex = pathArray.pop();
      const parentPath = pathArray.join("-");
      const parent = accessNode(parentPath);

      delete parent[nodeIndex];
    },
    [accessNode, fileTree]
  );

  const removeFromFileTree = useCallback(
    ({ nodePath }) => {
      removeNode({ nodePath });
      setFileTree({ ...fileTree });
    },
    [removeNode, fileTree]
  );

  const updateNodeName = useCallback(
    ({ nodePath, newValue }) => {
      const nodeToUpdate = accessNode(nodePath);
      nodeToUpdate["_name"] = newValue;

      setFileTree({ ...fileTree });
    },
    [accessNode, fileTree]
  );

  // moves a node to a new parent node, updating node's and all its children's nodePaths
  const migrateInFileTree = useCallback(
    ({ nodePath, newParentPath }) => {
      if (nodePath === newParentPath) return;

      const nodeToMigrate = accessNode(nodePath);
      addNode({ parentPath: newParentPath, type: nodeToMigrate._type, newNode: nodeToMigrate });
      removeNode({ nodePath });

      setFileTree({ ...fileTree });
      console.log(fileTree);
    },
    [accessNode, removeNode, addNode, fileTree]
  );

  const value = React.useMemo(
    () => ({
      addToFileTree,
      updateNodeName,
      removeFromFileTree,
      migrateInFileTree,
      fileTree,
      getNodeChildren,
      sortChildren,
    }),
    [
      addToFileTree,
      updateNodeName,
      removeFromFileTree,
      migrateInFileTree,
      fileTree,
      getNodeChildren,
      sortChildren,
    ]
  );

  return <fileTreeContext.Provider value={value}>{children}</fileTreeContext.Provider>;
};

function useFileTree() {
  const context = useContext(fileTreeContext);

  if (!context) {
    throw new Error(`useFileTree must be used within a FileTreeProvider`);
  }

  return context;
}

export { FileTreeProvider, useFileTree };
