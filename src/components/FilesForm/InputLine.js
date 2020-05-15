import React, { useCallback, useState } from "react";

import { useFileTree } from "../../hooks/fileTree";
import { InputContainer, Input, MidDot, DeleteButton, AddButtons } from "./styles";
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
  });

  const addNode = useCallback((type, parentPath) => {
    addToFileTree({ parentPath, type });
  }, []);

  const removeNode = useCallback(parentPath => {
    removeFromFileTree({ parentPath });
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

  const AddButtonsIcons = () => {
    if (type === "folder")
      return (
        <AddButtons>
          <FiFolderPlus onClick={() => addNode("folder", nodePath)} />
          <FiFilePlus onClick={() => addNode("file", nodePath)} />
        </AddButtons>
      );
  };

  return (
    <div id={nodePath}>
      <InputContainer col={col}>
        {AddButtonsIcons()}
        {InputIcons()}
        <Input ref={inputRef} placeholder={`${type} name`} value={value} onChange={handleChange} />
        <DeleteButton onClick={() => removeNode(nodePath)}>
          <FiX />
        </DeleteButton>
      </InputContainer>
      {children}
    </div>
  );
}
