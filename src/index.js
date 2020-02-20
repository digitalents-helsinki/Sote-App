import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

const innerHeightSetter = () => {
  const setInnerHeight = () =>
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight}px`
    );
  setInnerHeight();
  return setInnerHeight;
};

window.addEventListener("resize", innerHeightSetter());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: registration =>
    registration.unregister().then(() => window.location.reload())
});
