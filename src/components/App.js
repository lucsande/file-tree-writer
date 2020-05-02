import React, { useState } from "react";
import testFileTree from "../utils/testFileTree";
import FileTree from './FileTree/index'

function App() {
  const [fileTree, setFileTree] = useState(testFileTree);
  
  return (
    <FileTree fileTree={fileTree} />
  );
}

export default App;
