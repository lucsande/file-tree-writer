const exampleFileTree = {
  root: {
    _name: "exampleApp",
    _type: "folder",
    0: {
      _name: "folder",
      _type: "folder",
      0: { _name: "folder(1)", _type: "folder", 0: { _name: "example.css", _type: "file" } },

      1: { _name: "example.html", _type: "file" },
    },
    1: { _name: "example.js", _type: "file" },
  },
};

export default exampleFileTree;
