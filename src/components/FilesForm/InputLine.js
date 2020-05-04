import React from "react";
import { InputContainer, Input, MidDot } from "./styles";

import { FiChevronDown, FiFolder, FiFile } from "react-icons/fi";

export default function FilesForm({ type, col }) {
  if (type === "folder") {
    return (
      <InputContainer col={col}>
        <FiChevronDown style={{opacity: 0.8}}/>
        <FiFolder style={{opacity: 0.8}}/>
        <Input placeholder="Folder name"></Input>
      </InputContainer>
    );
  } else if (type === "file") {
    return (
      <InputContainer col={col}>
        <MidDot>&#183;</MidDot>
        <FiFile style={{opacity: 0.8}}/>
        <Input placeholder="File name"></Input>
      </InputContainer>
    );
  }
}

