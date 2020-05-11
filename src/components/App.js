import React, { useState } from "react";
import { Body, Container } from "./styles.js";
import FileTree from "./FileTree/index";
import FilesForm from "./FilesForm/index";

function App() {

  return (
    <Body>
      <Container>
        <FilesForm />
        <FileTree />
      </Container>
    </Body>
  );
}

export default App;
