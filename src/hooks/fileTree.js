import React, { createContext, useState, useCallback, useContext, useEffect } from "react";
import exampleFileTree from "../utils/exampleFileTree";

const fileTreeContext = createContext(null);

const FileTreeProvider = ({ children }) => {
  const [fileTree, setFileTree] = useState([]);

  useEffect(() => {
    async function loadInitialFileTree() {
      setFileTree(exampleFileTree);
    }

    loadInitialFileTree();
  }, []);

  const addToFileTree = useCallback(() => {
    // TODO
  }, [fileTree]);

  const removeFromFileTree = useCallback(() => {
    // TODO
  }, [fileTree]);

  const value = React.useMemo(() => ({ addToFileTree, removeFromFileTree, fileTree }), [
    addToFileTree,
    removeFromFileTree,
    fileTree,
  ]);

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
