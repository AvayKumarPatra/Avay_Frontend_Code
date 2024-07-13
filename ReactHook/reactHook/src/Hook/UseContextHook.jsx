import React from 'react'
import UseStateHook from './UseStateHook'
import { useContext } from 'react'
import { AppContext } from './ContextHook'


const UseContextHook = () => {
const userData=useContext(AppContext)
const {name , age}=userData;
    return (
    <>
       <div>`My name is ${name} and age is ${age}`</div>
       <UseStateHook /> 
    </>
  )
}

export default UseContextHook