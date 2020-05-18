
# SimpleFileTreeWriter

[A live version can be found here](https://file-tree-writer.now.sh/)
<br />

SimpleFileTreeWriter is web app that allows users to interactively generate directory trees for better presenting their projects' architecture. It was created with StackOverflow users in mind, who usually use such schema in their questions. 

The main motivation for this project was to use it as a practical exercise in UX, React, CSS and (lots of) recursion. But, hopefully, it can also be useful to other people. By the way, if you need to generate directory structures, you might also want to check the `tree` command, available for Linux, Windows and Mac.

![gif showing the app usage](https://github.com/lucsande/file-tree-writer/blob/master/public/images/file-tree-writer-usage.gif?raw=true)

<br />

## Running

You can run this app locally by running the command `yarn start` and opening [http://localhost:3000](http://localhost:3000) to view it in your browser. Changes to the code will automatically reload the browser apge.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Code Overview
<pre>
  file-tree-writer
    └──src
        ├──components
        |    ├──FileTree
        |    |    ├──index.js
        |    |    └──styles.js
        |    ├──FilesForm
        |    |    ├──InputLine.js
        |    |    ├──index.js
        |    |    └──styles.js
        |    ├──Header
        |    |    ├──index.js
        |    |    └──styles.js
        |    ├──App.js
        |    └──styles.js
        ├──hooks
        |    └──fileTree.js
        └──index.js
</pre>

<br />
<br />

### Hooks
#### useFileTree
useFileTree is a custom hook created for this project and used by the main components of the application. It was created using React's useContext and stores both the main state of the application (fileTree) and all the needed operations to manipulate the fileTree state. These operations rely heavily on recursion to add/remove/update nodes in the fileTree state. 

This hook is where most of the action in the app happens and is meant to centralize the logic responsible for changing the fileTree state, allowing the components to have logic regarding only user interactions and the display of data.
<br />
<br />

### Main Components
This project has three main components: Header, FilesForm and FileTree. This project uses [Styled Components](https://github.com/styled-components/styled-components), so each component directory also has a styles.js file with the necessary styled components. Logic changing the fileTree state is centralized in the useFileTree hook and the components focus only on the display logic.
<br />

#### Header 
It is the most basic of the components, used just for displaying the App's title and subtitle
<br />

#### FilesForm
This component uses the custom useFileTree hook to access the global fileTree state. This global state is used to generate the HTML inputs users interact with. This component has a child component called InputLine, which is used to render each one of the inputs and where most user interactions happen.
<br />

#### FileTree
This is the component responsible for displaying the final file tree the user can copy to use in StackOverflow questions. Just like FilesForm, this component gets the fileTree state from the useFileTree hook and uses it to recursively generate each one of the file tree lines. Each line is comprised of four elements: inheritedPrefix + pipeOrBlank + tpipeOrLpipe + treeNode._name 

![visual explanation of how file tree lines are written](https://github.com/lucsande/file-tree-writer/blob/master/public/images/anatomy-of-a-line.png?raw=true)




