//import React from 'react'

import { useState } from "react"

const InputBtn = ({title}) => {
    const[inputValue,setValue]=useState("");
  return (
    <div>
        <h1>{title}</h1>
        <div>
            <input type="text" placeholder="write sth" onChange={(e)=>setValue(e.target.value)} />
            <button onClick={()=>console.log(inputValue)}>click</button>
        </div>
    </div>
  )
}
export default InputBtn