import React, { useCallback, useState } from "react";
import { InputContainer, Input, MidDot } from "./styles";

import { FiChevronDown, FiFolder, FiFile } from "react-icons/fi";
import { useFileTree } from "../../hooks/fileTree";

export default function InputLine({ type, col, initialValue, nodePath, children }) {
  const [value, setValue] = useState(initialValue);
  const { updateFileTree } = useFileTree();
  const inputRef = React.useRef();
  const divRef = React.useRef();

  const handleChange = useCallback(() => {
    const newValue = inputRef.current.value;

    setValue(newValue);
    updateFileTree({ nodePath, newValue });
  });

  if (type === "folder") {
    return (
      <div id={nodePath} ref={divRef}>
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
        {children}
      </div>
    );
  } else if (type === "file") {
    return (
      <div id={nodePath} ref={divRef}>
        <InputContainer col={col}>
          <MidDot>&#183;</MidDot>
          <FiFile style={{ opacity: 0.8 }} />
          <Input
            ref={inputRef}
            placeholder="File name"
            value={value}
            onChange={handleChange}
          ></Input>
        </InputContainer>
      </div>
    );
  }
}
