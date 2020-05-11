import React, { useState, useEffect } from "react";
import { FilesFormContainer, InputContainer, Input } from "./styles";
import InputLine from "./InputLine";
import { useFileTree } from "../../hooks/fileTree";

import { FiFolder, FiChevronDown } from "react-icons/fi";

function FilesForm() {
  const { addToFileTree, removeFromFileTree, fileTree } = useFileTree();

  return (
    <FilesFormContainer>
      <InputLine type="folder" col="0" value='exampleApp'/>
      <InputLine type="folder" col="1" value='folder' />
      <InputLine type="folder" col="2" value='folder(1)' />
      <InputLine type="file" col="3" value='example.css' />
      <InputLine type="file" col="2" value='example.html' />
      <InputLine type="file" col="1" value='example.js' />
    </FilesFormContainer>
  );
}

export default FilesForm;
