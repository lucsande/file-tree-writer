import React, { useState, useEffect } from "react";
import { FilesFormContainer, InputContainer, Input } from "./styles";
import InputLine from './InputLine'

import { FiFolder, FiChevronDown } from "react-icons/fi";

function FilesForm() {
  return (
    <FilesFormContainer>
      <InputLine type="folder" col="0" />
      <InputLine type="folder" col="1" />
      <InputLine type="folder" col="2" />
      <InputLine type="file" col="3" />
      <InputLine type="file" col="2" />
      <InputLine type="file" col="1" />
      <InputLine type="file" col="1" />
    </FilesFormContainer>
  );
}

export default FilesForm;
