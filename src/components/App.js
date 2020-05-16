import React, { useState } from "react";
import { Body, Container, FilesContainer } from "./styles.js";

import Header from "./Header/index";
import FilesForm from "./FilesForm/index";
import FileTree from "./FileTree/index";

function App() {
  return (
    <Body>
      <Container>
        <Header />
        <FilesContainer>
          <FileTree />
          <FilesForm />
        </FilesContainer>
      </Container>
    </Body>
  );
}

export default App;
