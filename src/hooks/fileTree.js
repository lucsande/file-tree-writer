import React, { createContext, useState, useCallback, useContext, useEffect } from "react";
import exampleFileTree from "../utils/exampleFileTree";

const fileTreeContext = createContext(null);

const FileTreeProvider = ({ children }) => {
  const [fileTree, setFileTree] = useState(exampleFileTree);
  const nodesMetadata = ["_name", "_type", "_nodePath"];

  const accessNode = nodePath => {
    const nodesArray = nodePath.split("-");
    let nodeToAccess = fileTree;

    nodesArray.forEach(node => {
      if (nodeToAccess.hasOwnProperty(node) && typeof nodeToAccess[node] === "object") {
        nodeToAccess = nodeToAccess[node];
      } else {
        throw new Error("nodePath couldn't be resolved");
      }
    });

    return nodeToAccess;
  };

  const addToFileTree = useCallback(
    ({ parentPath, type }) => {
      const parent = accessNode(parentPath);
      const index = nodeChildrenCount(parent);

      parent[index] = { _name: "", _type: type, _nodePath: parentPath + "-" + index };

      setFileTree({ ...fileTree });
    },
    [fileTree]
  );

  const removeFromFileTree = useCallback(
    ({ parentPath }) => {
      // TODO
    },
    [fileTree]
  );

  const updateNodeName = useCallback(({ nodePath, newValue }) => {
    const nodeToUpdate = accessNode(nodePath);
    nodeToUpdate["_name"] = newValue;

    setFileTree({ ...fileTree });
  }, []);

  const getNodeChildren = parentNode => {
    if (parentNode._type === "file") return [];

    const parentNodeEntries = Object.entries(parentNode);
    const children = parentNodeEntries.map(entry => {
      const entryName = entry[0];
      const child = entry[1];
      if (!nodesMetadata.includes(entryName)) return child;
    });

    const filteredChildren = children.filter(child => child !== undefined);
    const sortedChildren = sortChildren(filteredChildren);

    return sortedChildren;
  };

  const nodeChildrenCount = parentNode => {
    if (parentNode._type === "file") return 0;

    const numberOfEntries = Object.entries(parentNode).length;
    const numberOfMetadataEntries = nodesMetadata.length;

    return numberOfEntries - numberOfMetadataEntries;
  };

  // folders come before files, folders in alphabetical order, files in alphabetical order
  const sortChildren = children => {
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
  };

  const value = React.useMemo(
    () => ({
      addToFileTree,
      updateNodeName,
      removeFromFileTree,
      fileTree,
      getNodeChildren,
      sortChildren,
    }),
    [addToFileTree, updateNodeName, removeFromFileTree, fileTree, getNodeChildren, sortChildren]
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
