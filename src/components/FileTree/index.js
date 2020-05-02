import React, { useState, useEffect } from "react";
import { FileTreeContainer } from "./styles";

function FileTree(props) {
  const { fileTree } = props;
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const linesString = writeLines({ treeNode: fileTree, isProjectRoot: true });

    setLines(linesString.split("!separator!"));
  }, [fileTree]);

  const blank = "    ";
  const iPipe = " |  ";
  const tPipe = " ├──";
  const lPipe = " └──";

  const getNodeChildren = parentNode => {
    const parentNodeEntries = Object.entries(parentNode);
    const children = parentNodeEntries.map(entry => {
      const entryName = entry[0];
      const child = entry[1];
      if (entryName !== "_name") return child;
    });

    return children.filter(child => child !== undefined);
  };

  const writeChildrenLines = (parentNode, parentWasLastChild, prefixToBestow) => {
    const children = getNodeChildren(parentNode);
    let childrenLines = "";
    console.log(children);

    if (children.length === 0) return childrenLines;

    children.forEach((child, index) => {
      const treeNode = child;
      const isLastChild = index === children.length - 1;
      const inheritedPrefix = prefixToBestow;

      const childInfos = { treeNode, isLastChild, parentWasLastChild, inheritedPrefix };
      childrenLines += writeLines(childInfos);
    });

    return childrenLines;
  };

  const writeLines = nodeInfos => {
    let { treeNode, isLastChild, parentWasLastChild, inheritedPrefix, isProjectRoot } = nodeInfos;
  
    let pipeOrBlank = parentWasLastChild ? blank : iPipe;
    let tpipeOrLpipe = isLastChild ? lPipe : tPipe;
    let prefixToBestow = inheritedPrefix + pipeOrBlank;
    
    let nodeLine = inheritedPrefix + pipeOrBlank + tpipeOrLpipe + treeNode._name + "!separator!";
    
    if (isProjectRoot) {
      isLastChild = true
      prefixToBestow = ''

      nodeLine = blank + treeNode._name + "!separator!";
    }
    
    const childrenLines = writeChildrenLines(treeNode, isLastChild, prefixToBestow);
    return nodeLine + childrenLines;
  };

  return (
    <FileTreeContainer>
      <code>
        {lines.map(line => (
          <pre style={{margin: 0}}>{line}</pre>
        ))}
      </code>
    </FileTreeContainer>
  );
}

export default FileTree;
