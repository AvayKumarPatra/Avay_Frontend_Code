import { useState } from "react";
import "./App.css";
import UseStateHook from "./Hook/UseStateHook";
import UseEffectHook from "./Hook/UseEffectHook";
import UseContextHook from "./Hook/UseContextHook";
import { UseReducer } from "./Hook/UseReducer";
import { UseMemoHook } from "./Hook/UseMemoHook";

function App() {
  const userDetails={
    name:"avay",
    age:23,
  }

  return (
    <>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseReducer /> */}
      <UseMemoHook />
    </>
  );
}

export default App;
