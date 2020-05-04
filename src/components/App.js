import React, { useState } from "react";
import testFileTree from "../utils/testFileTree";
import { Body, Container } from "./styles.js";
import FileTree from "./FileTree/index";
import FilesForm from "./FilesForm/index";

function App() {
  const [fileTree, setFileTree] = useState(testFileTree);

  return (
    <Body>
      <Container>
        <FilesForm />
        <FileTree fileTree={fileTree} />
      </Container>
    </Body>
  );
}

export default App;
