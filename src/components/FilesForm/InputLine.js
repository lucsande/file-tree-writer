import React, { useCallback, useState } from "react";

import { useFileTree } from "../../hooks/fileTree";
import { InputContainer, Input, MidDot, Buttons } from "./styles";
import { FiX, FiChevronDown, FiFolder, FiFile, FiFolderPlus, FiFilePlus } from "react-icons/fi";

export default function InputLine(props) {
  const { type, col, initialValue, nodePath, children } = props;
  const [value, setValue] = useState(initialValue);
  const { updateNodeName, addToFileTree, removeFromFileTree, migrateInFileTree } = useFileTree();

  const inputRef = React.useRef();

  const onDragStart = useCallback(event => {
    event.dataTransfer.setData("text/plain", event.target.id);
  }, []);

  const onDragOver = useCallback(event => {
    event.preventDefault();
  }, []);

  const onDrop = useCallback(
    event => {
      const newParent = event.currentTarget;
      let newParentPath = newParent.dataset.nodePath;

      const isInvalidParent = newParent.dataset.type === "file";
      const nodeIndexFinder = /-\d+$/;
      if (isInvalidParent) newParentPath.replace(nodeIndexFinder, "");

      const draggedElementId = event.dataTransfer.getData("text");
      const draggedElement = document.querySelector(`#${draggedElementId}`);
      const draggedElmPath = draggedElement.dataset.nodePath;

      migrateInFileTree({ nodePath: draggedElmPath, newParentPath });
      event.dataTransfer.clearData();
    },
    [migrateInFileTree]
  );

  const handleChange = useCallback(() => {
    const newValue = inputRef.current.value;

    setValue(newValue);
    updateNodeName({ nodePath, newValue });
  }, [nodePath, updateNodeName]);

  const addNode = useCallback(
    async (type, parentPath) => {
      const newNode = await addToFileTree({ parentPath, type });

      const newInput = document.querySelector(`#input-${newNode._nodePath}`);
      newInput.focus();
    },
    [addToFileTree]
  );

  const removeNode = useCallback(
    nodePath => {
      if (nodePath === "root") setValue("root");
      removeFromFileTree({ nodePath });
    },
    [removeFromFileTree]
  );

  const showTypeIcons = () => {
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

  const showButtonIcons = () => {
    if (type === "folder") {
      return (
        <Buttons>
          <FiFolderPlus className='folder-plus-btn' onClick={() => addNode("folder", nodePath)} />
          <FiFilePlus className='file-plus-btn' onClick={() => addNode("file", nodePath)} />
          <FiX className='delete-btn' onClick={() => removeNode(nodePath)} />
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
    <>
      <InputContainer
        col={col}
        id={"id-" + nodePath}
        draggable="true"
        onDragStart={evt => onDragStart(evt)}
        onDragOver={evt => onDragOver(evt)}
        onDrop={evt => onDrop(evt)}
        data-node-path={nodePath}
        data-type={type}
      >
        <div>
          {showTypeIcons()}
          <Input
            id={"input-" + nodePath}
            ref={inputRef}
            placeholder={`${type} name`}
            value={value}
            onChange={handleChange}
          />
        </div>
        {showButtonIcons()}
      </InputContainer>
      {children}
    </>
  );
}
