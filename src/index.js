import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import App from "./components/App";
import { FileTreeProvider } from "./hooks/fileTree.js";

ReactDOM.render(
  <React.StrictMode>
    <FileTreeProvider>
      <App />
    </FileTreeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
