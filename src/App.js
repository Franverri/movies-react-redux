import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
//import './App.css';

import List from "./components/List.jsx";
import Post from "./components/Posts.jsx";

function App() {
  return (
    <Provider store={store}>
      <div id="bodyContainer">
        <div>
          <List />
        </div>
        <div>
          <Post />
        </div>
      </div>
    </Provider>
  );
}

// function App() {
//   return (
//     <h1>prueba</h1>
//   );
// }

export default App;
