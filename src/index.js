import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

function Index() {
  return (
    <div>
      <App />
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
