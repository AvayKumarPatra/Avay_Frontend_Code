import { useState } from "react";
import "./App.css";
import UseStateHook from "./Hook/UseStateHook";
import UseEffectHook from "./Hook/UseEffectHook";
import UseContextHook from "./Hook/UseContextHook";

function App() {
  const userDetails={
    name:"avay",
    age:23,
  }

  return (
    <>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      <UseContextHook />
    </>
  );
}

export default App;
