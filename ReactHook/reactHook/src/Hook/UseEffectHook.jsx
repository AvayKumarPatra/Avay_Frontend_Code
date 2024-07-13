import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count,setCount]=useState(0)
const handleClick=()=>{
    setCount(count+1)
}
useEffect(()=>{
    document.title=count;
},[count])

  return (
    <>
     <div>Count is {count}</div>
     <button onClick={handleClick}>Increment</button>
     <button onClick={()=> (count === 0) ? setCount(0) : setCount(count-1)}>Decrement</button>
    </>
  )
}

export default UseEffectHook