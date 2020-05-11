import React, { createContext, useState, useCallback, useContext, useEffect } from "react";
import exampleFileTree from "../utils/exampleFileTree";

const fileTreeContext = createContext(null);

const FileTreeProvider = ({ children }) => {
  const [fileTree, setFileTree] = useState(exampleFileTree);

  // useEffect(() => {
  //   setFileTree(exampleFileTree);
  //   console.log(fileTree);
  // }, []);

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
      setFileTree({ ...fileTree, _name: newValue });
    } else {
      updateNode(nodePath, newValue);
      setFileTree({ ...fileTree });
    }
  }, []);

  const removeFromFileTree = useCallback(() => {
    // TODO
  }, [fileTree]);

  const value = React.useMemo(
    () => ({ addToFileTree, updateFileTree, removeFromFileTree, fileTree }),
    [addToFileTree, updateFileTree, removeFromFileTree, fileTree]
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
