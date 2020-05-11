import React, { useState, useEffect } from "react";
import { FileTreeContainer, FileTreeLine } from "./styles";
import { writeFileTree } from './methods/fileTreeWriter'
import { useFileTree } from "../../hooks/fileTree";

function FileTree() {
  const { fileTree } = useFileTree();

  const [lines, setLines] = useState([]);

  useEffect(() => {
    const linesString = writeFileTree(fileTree);

    setLines(linesString.split("!separator!"));
  }, [fileTree]);

  return (
    <FileTreeContainer>
      <code>
        {lines.map(line => (
          <FileTreeLine key={line}>{line.substring(5)}</FileTreeLine>
        ))}
      </code>
    </FileTreeContainer>
  );
}

export default FileTree;
