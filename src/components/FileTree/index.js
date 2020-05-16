import React, { useState, useEffect, useRef, useCallback } from "react";
import { FileTreeContainer, FileTreeLine, CopyIconContainer, Tooltip } from "./styles";
import { FiCopy } from "react-icons/fi";

import { useFileTree } from "../../hooks/fileTree";

function FileTree() {
  const { fileTree } = useFileTree();
  const { getNodeChildren } = useFileTree();

  const [lines, setLines] = useState([]);
  const codeAreaRef = useRef();
  const tooltipRef = useRef();

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

  const showTooltip = useCallback(() => {
    const tooltip = tooltipRef.current;
    tooltip.style.opacity = 1;
    tooltip.style.visibility = "visible";

    setTimeout(() => (tooltip.style.opacity = 0), 1000);
    setTimeout(() => (tooltip.style.visibility = 'hidden'), 1500);
  }, []);

  const copyToClipboard = useCallback(() => {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = codeAreaRef.current.innerText;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");

    showTooltip();

    document.body.removeChild(tempTextArea);
  }, [showTooltip]);

  return (
    <FileTreeContainer>
      <CopyIconContainer>
        <FiCopy id="copy-icon" onClick={() => copyToClipboard()} />
        <Tooltip ref={tooltipRef} className="tooltip">
          Copied to clipboard!
        </Tooltip>
      </CopyIconContainer>
      <code ref={codeAreaRef} id="code-area">
        {lines.map(line => (
          <FileTreeLine key={Math.random(9999)}>{line.substring(5)}</FileTreeLine>
        ))}
      </code>
    </FileTreeContainer>
  );
}

export default FileTree;
