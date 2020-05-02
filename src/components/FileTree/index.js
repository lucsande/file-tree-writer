import React, { useState, useEffect } from "react";
import { FileTreeContainer, FileTreeLine } from "./styles";
import { writeFileTree } from '../../utils/fileTreeWriter'

function FileTree(props) {
  const { fileTree } = props;
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const linesString = writeFileTree(fileTree);

    setLines(linesString.split("!separator!"));
  }, [fileTree]);

  return (
    <FileTreeContainer>
      <code>
        {lines.map(line => (
          <FileTreeLine>{line}</FileTreeLine>
        ))}
      </code>
    </FileTreeContainer>
  );
}

export default FileTree;
