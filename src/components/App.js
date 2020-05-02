import React, { useState } from "react";
import testFileTree from "../utils/testFileTree";
import { Body, Container } from "./styles.js";
import FileTree from "./FileTree/index";

function App() {
  const [fileTree, setFileTree] = useState(testFileTree);

  return (
    <Body>
      <Container>
        <FileTree fileTree={fileTree} />
      </Container>
    </Body>
  );
}

export default App;
