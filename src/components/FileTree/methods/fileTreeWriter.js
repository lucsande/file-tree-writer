const blank = "     ";
const iPipe = "  |  ";
const tPipe = "  ├──";
const lPipe = "  └──";

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
  
  const filteredChildren = children.filter(child => child !== undefined);
  const sortedChildren = sortChildren(filteredChildren)
  
  return sortedChildren;
};

// folders come before files, folders in alphabetical order, files in alphabetical order
const sortChildren = (children) => {
  const sortedChildren = children.sort((a, b) => {
    const aIsFolder = Object.entries(a).length > 1;
    const bIsFolder = Object.entries(b).length > 1;

    if (aIsFolder && !bIsFolder) {
      return -1;
    } else if (!aIsFolder && bIsFolder) {
      return 1;
    } else {
      return a._name < b._name ? -1 : 1;
    }
  });

  return sortedChildren
}

const writeLines = nodeInfos => {
  let { treeNode, isLastChild, parentWasLastChild, inheritedPrefix } = nodeInfos;

  let pipeOrBlank = parentWasLastChild ? blank : iPipe;
  let tpipeOrLpipe = isLastChild ? lPipe : tPipe;
  let prefixToBestow = inheritedPrefix + pipeOrBlank;

  let nodeLine = inheritedPrefix + pipeOrBlank + tpipeOrLpipe + treeNode._name + "!separator!";

  const childrenLines = writeChildrenLines(treeNode, isLastChild, prefixToBestow);
  return nodeLine + childrenLines;
};
