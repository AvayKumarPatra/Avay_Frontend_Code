import React, { useReducer, useState } from "react";
import UseStateHook from "./UseStateHook";
import { reducer } from "../Store/Reducers/reducerHook";

export const UseReducer = () => {
//   const [component, setComponent] = useState([<UseStateHook></UseStateHook>]);
  const [state,dispatch]=useReducer(reducer,[<UseStateHook></UseStateHook>])

  const handleAddClick = () => {
    const addComponent = [...component];
    addComponent.push(<UseStateHook></UseStateHook>);
    setComponent(addComponent)
  };

  const handleRemoveClick = () => {
    const allComponent=[...component]
    allComponent.pop()
    setComponent(allComponent)
  };
  return (
    <>
      <div>UseReducer</div>
      <button onClick={()=>dispatch({type:'Add'})}>Add Component</button>
      <button onClick={()=>dispatch({type:'Remove'})}>Remove Component</button>
      {/* <UseStateHook /> */}
      {state.map(c=>c)}
    </>
  );
};
