const testFileTree = {
  root: {
    _name: "appRoot",
    _type: "folder",
    _nodePath: 'root',
    _nextChildIndex: 3,
    0: {
      _name: "assets",
      _type: "folder",
      _nodePath: 'root-0',
      _nextChildIndex: 2,
      0: {
        _name: "styles",
        _type: "folder",
        _nodePath: 'root-0-0',
        _nextChildIndex: 2,
        0: { _name: "index.css", _type: "file", _nodePath: 'root-0-0-0' },
        1: { _name: "auth.css", _type: "file", _nodePath: 'root-0-0-1' },
      },
      1: {
        _name: "images",
        _type: "folder",
        _nodePath: 'root-0-1',
        _nextChildIndex: 2,
        0: { _name: "logo.png", _type: "file", _nodePath: 'root-0-1-0' },
        1: { _name: "avatar.jpg", _type: "file", _nodePath: 'root-0-1-1' },
      },
    },
    1: { _name: "index.js", _type: "file", _nodePath: 'root-1' },
    2: {
      _name: "components",
      _type: "folder",
      _nodePath: 'root-2',
      _nextChildIndex: 2,
      0: { _name: "Dashboard.js", _type: "file", _nodePath: 'root-2-0' },
      1: { _name: "Auth.js", _type: "file", _nodePath: 'root-2-1' },
    },
  },
};

export default testFileTree;
