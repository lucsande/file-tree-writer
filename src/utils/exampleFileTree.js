const exampleFileTree = {
  root: {
    _name: "exampleApp",
    _type: "folder",
    _nodePath: "root",
    0: {
      _name: "folder",
      _type: "folder",
      _nodePath: "root-0",
      0: {
        _name: "folder(1)",
        _type: "folder",
        _nodePath: "root-0-0",
        0: { _name: "example.css", _type: "file", _nodePath: "root-0-0-0" },
      },

      1: { _name: "example.html", _type: "file", _nodePath: "root-0-1" },
    },
    1: { _name: "example.js", _type: "file", _nodePath: "root-1" },
  },
};

export default exampleFileTree;
