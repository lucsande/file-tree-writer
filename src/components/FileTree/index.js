import React, { useState, useEffect } from "react";
import { FileTreeContainer, FileTreeLine } from "./styles";
import { useFileTree } from "../../hooks/fileTree";

function FileTree() {
  const { fileTree } = useFileTree();
  const { getNodeChildren, sortChildren } = useFileTree();

  const [lines, setLines] = useState([]);

  useEffect(() => {
    const linesString = writeFileTree(fileTree.root);

    setLines(linesString.split("!separator!"));
  }, [fileTree]);

  const blank = "     ";
  const iPipe = "  |  ";
  const tPipe = "  ├──";
  const lPipe = "  └──";

  const writeFileTree = fileTree => {
    const isLastChild = true;
    const prefixToBestow = "";
    const treeNode = fileTree;
    const childrenLines = writeChildrenLines(treeNode, isLastChild, prefixToBestow);

    const projectRootLine = blank + treeNode._name + "!separator!";
    return projectRootLine + childrenLines;
  };

  const writeLines = nodeInfos => {
    let { treeNode, isLastChild, parentWasLastChild, inheritedPrefix } = nodeInfos;

    let pipeOrBlank = parentWasLastChild ? blank : iPipe;
    let tpipeOrLpipe = isLastChild ? lPipe : tPipe;
    let prefixToBestow = inheritedPrefix + pipeOrBlank;

    let nodeLine = inheritedPrefix + pipeOrBlank + tpipeOrLpipe + treeNode._name + "!separator!";

    const childrenLines = writeChildrenLines(treeNode, isLastChild, prefixToBestow);
    return nodeLine + childrenLines;
  };

  const writeChildrenLines = (parentNode, parentWasLastChild, prefixToBestow) => {
    const children = getNodeChildren(parentNode);
    let childrenLines = "";

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

  return (
    <FileTreeContainer>
      <code>
        {lines.map(line => (
          <FileTreeLine key={Math.random(5000)}>{line.substring(5)}</FileTreeLine>
        ))}
      </code>
    </FileTreeContainer>
  );
}

export default FileTree;
