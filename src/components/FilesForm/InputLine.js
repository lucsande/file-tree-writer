import React, { useCallback, useState } from "react";

import { useFileTree } from "../../hooks/fileTree";
import { InputContainer, Input, MidDot, Buttons } from "./styles";
import { FiX, FiChevronDown, FiFolder, FiFile, FiFolderPlus, FiFilePlus } from "react-icons/fi";

export default function InputLine(props) {
  const { type, col, initialValue, nodePath, children } = props;
  const [value, setValue] = useState(initialValue);
  const { updateNodeName, addToFileTree, removeFromFileTree } = useFileTree();

  const inputRef = React.useRef();

  const handleChange = useCallback(() => {
    const newValue = inputRef.current.value;

    setValue(newValue);
    updateNodeName({ nodePath, newValue });
  }, []);

  const addNode = useCallback(async (type, parentPath) => {
    const newNode = await addToFileTree({ parentPath, type });

    const newInput = document.querySelector(`#${newNode._nodePath}-input`);
    newInput.focus();
  }, []);

  const removeNode = useCallback(nodePath => {
    if (nodePath === "root") setValue("root");
    removeFromFileTree({ nodePath });
  }, []);

  const InputIcons = () => {
    if (type === "folder") {
      return (
        <>
          <FiChevronDown style={{ opacity: 0.8 }} />
          <FiFolder style={{ opacity: 0.8 }} />
        </>
      );
    } else if (type === "file") {
      return (
        <>
          <MidDot>&#183;</MidDot>
          <FiFile style={{ opacity: 0.8 }} />
        </>
      );
    }
  };

  const ButtonsIcons = () => {
    if (type === "folder") {
      return (
        <Buttons>
          <FiFolderPlus onClick={() => addNode("folder", nodePath)} />
          <FiFilePlus onClick={() => addNode("file", nodePath)} />
          <FiX onClick={() => removeNode(nodePath)} />
        </Buttons>
      );
    } else {
      return (
        <Buttons>
          <FiX onClick={() => removeNode(nodePath)} />
        </Buttons>
      );
    }
  };

  return (
    <div>
      <InputContainer col={col}>
        <div>
          {InputIcons()}
          <Input
            id={nodePath + "-input"}
            ref={inputRef}
            placeholder={`${type} name`}
            value={value}
            onChange={handleChange}
          />
        </div>
        {ButtonsIcons()}
      </InputContainer>
      {children}
    </div>
  );
}
