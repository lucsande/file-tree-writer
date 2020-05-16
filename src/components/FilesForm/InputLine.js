import React, { useCallback, useState } from "react";

import { useFileTree } from "../../hooks/fileTree";
import {
  InputContainer,
  Input,
  MidDot,
  DeleteButton,
  AddButtons,
  AddFolder,
  AddFile,
} from "./styles";
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

  const addNode = useCallback((type, parentPath) => {
    addToFileTree({ parentPath, type });
  }, []);

  const removeNode = useCallback(nodePath => {
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

  const AddButtonsIcons = () => {
    if (type === "folder")
      return (
        <AddButtons>
          <AddFolder>
            <FiFolderPlus onClick={() => addNode("folder", nodePath)} />
          </AddFolder>
          <AddFile>
            <FiFilePlus onClick={() => addNode("file", nodePath)} />
          </AddFile>
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
