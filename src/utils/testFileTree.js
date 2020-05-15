const testFileTree = {
  root: {
    _name: "appRoot",
    _type: "folder",
    0: {
      _name: "assets",
      _type: "folder",
      0: {
        _name: "styles",
        _type: "folder",
        0: { _name: "index.css", _type: "file" },
        1: { _name: "auth.css", _type: "file" },
      },
      1: {
        _name: "images",
        _type: "folder",
        0: { _name: "logo.png", _type: "file" },
        1: { _name: "avatar.jpg", _type: "file" },
      },
    },
    1: { _name: "index.js", _type: "file" },
    2: {
      _name: "components",
      _type: "folder",
      0: { _name: "Dashboard.js", _type: "file" },
      1: { _name: "Auth.js", _type: "file" },
    },
  },
};

export default testFileTree;
