import React, { useState, useEffect } from "react";
import { FilesFormContainer, InputContainer, Input } from "./styles";
import InputLine from "./InputLine";
import { useFileTree } from "../../hooks/fileTree";

import { FiFolder, FiChevronDown } from "react-icons/fi";

function FilesForm() {
  const { addToFileTree, removeFromFileTree, fileTree } = useFileTree();

  return (
    <FilesFormContainer>
      <InputLine type="folder" col="0" nodePath="root" initialValue='exampleApp'/>
      <InputLine type="folder" col="1" nodePath="0" initialValue='folder' />
      <InputLine type="folder" col="2" nodePath="0-0" initialValue='folder(1)' />
      <InputLine type="file" col="3" nodePath="0-0-0" initialValue='example.css' />
      <InputLine type="file" col="2" nodePath="0-1" initialValue='example.html' />
      <InputLine type="file" col="1" nodePath="1" initialValue='example.js' />
    </FilesFormContainer>
  );
}

export default FilesForm;
