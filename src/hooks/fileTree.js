import React, { createContext, useState, useCallback, useContext, useEffect } from "react";
import exampleFileTree from "../utils/exampleFileTree";

const fileTreeContext = createContext(null);

const FileTreeProvider = ({ children }) => {
  const [fileTree, setFileTree] = useState(exampleFileTree);

  const updateNode = (nodePath, newValue) => {
    const nodesArray = nodePath.split("-");
    let nodeToUpdate = fileTree;

    nodesArray.forEach(node => {
      if (nodeToUpdate.hasOwnProperty(node) && typeof nodeToUpdate[node] === "object") {
        nodeToUpdate = nodeToUpdate[node];
      } else {
        throw new Error("nodePath couldn't be resolved");
      }
    });

    nodeToUpdate["_name"] = newValue;
  };

  const addToFileTree = useCallback(() => {
    // TODO
  }, [fileTree]);

  const updateFileTree = useCallback(({ nodePath, newValue }) => {
    if (nodePath === "root") {
      fileTree["_name"] = newValue;
      setFileTree({ ...fileTree });
    } else {
      updateNode(nodePath, newValue);
      setFileTree({ ...fileTree });
    }
    console.log(fileTree);
  }, []);

  const removeFromFileTree = useCallback(() => {
    // TODO
  }, [fileTree]);

  const getNodeChildren = parentNode => {
    if (parentNode._type === "file") return [];

    const parentNodeEntries = Object.entries(parentNode);
    const children = parentNodeEntries.map(entry => {
      const entryName = entry[0];
      const child = entry[1];
      if (entryName !== "_name" && entryName !== "_type") return child;
    });

    const filteredChildren = children.filter(child => child !== undefined);
    const sortedChildren = sortChildren(filteredChildren);

    return sortedChildren;
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
    () => ({ addToFileTree, updateFileTree, removeFromFileTree, fileTree, getNodeChildren }),
    [addToFileTree, updateFileTree, removeFromFileTree, fileTree, getNodeChildren]
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
