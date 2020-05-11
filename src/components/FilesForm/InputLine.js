import React, { useCallback, useState } from "react";
import { InputContainer, Input, MidDot } from "./styles";

import { FiChevronDown, FiFolder, FiFile } from "react-icons/fi";
import { useFileTree } from "../../hooks/fileTree";

export default function InputLine({ type, col, initialValue, nodePath }) {
  const [value, setValue] = useState(initialValue);
  const { updateFileTree } = useFileTree();
  const inputRef = React.useRef();

  const handleChange = useCallback(() => {
    const newValue = inputRef.current.value;

    setValue(newValue);
    updateFileTree({ nodePath, newValue });
  });

  if (type === "folder") {
    return (
      <InputContainer col={col}>
        <FiChevronDown style={{ opacity: 0.8 }} />
        <FiFolder style={{ opacity: 0.8 }} />
        <Input
          ref={inputRef}
          placeholder="Folder name"
          value={value}
          onChange={handleChange}
        ></Input>
      </InputContainer>
    );
  } else if (type === "file") {
    return (
      <InputContainer col={col}>
        <MidDot>&#183;</MidDot>
        <FiFile style={{ opacity: 0.8 }} />
        <Input ref={inputRef} placeholder="File name" value={value} onChange={handleChange}></Input>
      </InputContainer>
    );
  }
}
