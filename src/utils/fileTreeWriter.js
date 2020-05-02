const blank = "    ";
const iPipe = " |  ";
const tPipe = " ├──";
const lPipe = " └──";

export const writeFileTree = fileTree => {
  const isLastChild = true;
  const prefixToBestow = "";
  const treeNode = fileTree;
  const childrenLines = writeChildrenLines(treeNode, isLastChild, prefixToBestow);
  
  const projectRootLine = blank + treeNode._name + "!separator!";
  return projectRootLine + childrenLines;
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

const getNodeChildren = parentNode => {
  const parentNodeEntries = Object.entries(parentNode);
  const children = parentNodeEntries.map(entry => {
    const entryName = entry[0];
    const child = entry[1];
    if (entryName !== "_name") return child;
  });

  return children.filter(child => child !== undefined);
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