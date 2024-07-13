import React, { useEffect, useRef } from "react";

export const UseRefHook = () => {
    const refElem=useRef(0)

useEffect(()=>{
refElem.current=refElem.current+1
})
  return (
    <>
      <h1>UseRef Hook Example</h1>
      <input style={{ border: "1px solid black" }}></input>
      <h3>The input count is  {refElem.current}</h3>
    </>
  );
};
