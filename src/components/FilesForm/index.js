import React from "react";

import { FilesFormContainer } from "./styles";
import InputLine from "./InputLine";
import { useFileTree } from "../../hooks/fileTree";

function FilesForm() {
  const { fileTree, getNodeChildren } = useFileTree();

  const createInputs = node => {
    const nodePath = node._nodePath;
    const col = nodePath.split("-").length - 1;
    const children = getNodeChildren(node);

    return (
      <InputLine
        key={nodePath}
        type={node._type}
        col={col}
        nodePath={nodePath}
        initialValue={node._name}
      >
        {children.map(child => createInputs(child))}
      </InputLine>
    );
  };

  return <FilesFormContainer>{createInputs(fileTree.root)}</FilesFormContainer>;
}

export default FilesForm;
