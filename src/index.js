import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import HookCounter from "./Hooks";

function App() {
  return (
    <div className="App">
      <HookCounter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
