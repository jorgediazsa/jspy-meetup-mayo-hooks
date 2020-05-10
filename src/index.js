import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import StateWithClass from "./StateWithClass";
import StateWithHooks from "./StateWithHooks";
import Effect from "./Effect";
import Ref from "./Ref";
import Context from "./Context";
import Reducer from "./Reducer";
import Memo from "./Memo";
import WithoutContext from "./WithoutContext";

const componentMapping = [
  StateWithClass,
  StateWithHooks,
  Effect,
  Ref,
  WithoutContext,
  Context,
  Reducer,
  Memo
];

const ComponentToRender = null;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      {ComponentToRender ? (
        <ComponentToRender />
      ) : (
        componentMapping.map((Component, index) => (
          <>
            <Component key={`component_${index}`} />
            <hr />
          </>
        ))
      )}
    </div>
  </React.StrictMode>,
  rootElement
);
