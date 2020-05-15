import React from "react";

import { FilesFormContainer } from "./styles";
import InputLine from "./InputLine";
import { useFileTree } from "../../hooks/fileTree";

function FilesForm() {
  const { fileTree, getNodeChildren } = useFileTree();

  const createInputs = (node, nodePath = "root") => {
    const col = nodePath.split("-").length - 1;
    const children = getNodeChildren(node);

    return (
      <InputLine type={node._type} col={col} nodePath={nodePath} initialValue={node._name}>
        {children.map((child, index) => createInputs(child, nodePath + '-' + index))}
      </InputLine>
    );
  };

  return <FilesFormContainer>{createInputs(fileTree.root)}</FilesFormContainer>;
}

export default FilesForm;
