import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";

import { useFileTree } from "../../hooks/fileTree";
import { InputContainer, Input, MidDot, DeleteButton, AddButtons } from "./styles";
import { FiX, FiChevronDown, FiFolder, FiFile, FiFolderPlus, FiFilePlus } from "react-icons/fi";

export default function InputLine(props) {
  const { type, col, initialValue, nodePath, children } = props;

  const [value, setValue] = useState(initialValue);
  const { updateFileTree, addToFileTree, removeFromFileTree } = useFileTree();

  const inputRef = React.useRef();
  const divRef = React.useRef();

  const handleChange = useCallback(() => {
    const newValue = inputRef.current.value;

    setValue(newValue);
    updateFileTree({ nodePath, newValue });
  });

  const addNode = useCallback((type, parentDiv, parentPath, parentCol) => {
    const index = parentDiv.childElementCount;
    // addToFileTree(type);

    console.log(children);
    const newNode = (
      <InputLine
        type={type}
        col={parentCol + 1}
        nodePath={`${parentPath}-${index}`}
        initialValue="exampleApp"
        addNode={addNode}
      ></InputLine>
    );

    // precisa adicionar propriedade nosnodes da fileTree: lastChildrenIndex
  });

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
          <FiFolderPlus onClick={() => addNode("folder", divRef.current, nodePath, col)} />
          <FiFilePlus onClick={() => addNode("file", divRef.current, nodePath, col)} />
        </AddButtons>
      );
  };

  return (
    <div id={nodePath} ref={divRef}>
      <InputContainer col={col}>
        {AddButtonsIcons()}
        {InputIcons()}
        <Input ref={inputRef} placeholder={`${type} name`} value={value} onChange={handleChange} />
        <DeleteButton>
          <FiX />
        </DeleteButton>
      </InputContainer>
      {children}
    </div>
  );
}
