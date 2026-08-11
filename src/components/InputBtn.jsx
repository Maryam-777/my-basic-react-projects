//import React from 'react'

import { useState } from "react"

const InputBtn = ({title}) => {
    const[inputValue,setValue]=useState("");
  return (
    <div className="border border-pink-700 mt-6 p-2 rounded-2xl mx-2" >
        <h1 className="mb-40 font-semibold text-[30px] text-pink-600">{title}</h1>
        <div className="flex flex-col gap-3">
            <input type="text" placeholder="write sth" onChange={(e)=>setValue(e.target.value)} 
            className="border-pink-400 border focus:outline-none rounded-md p-1"/>
            <button onClick={()=>console.log(inputValue)}
              className="bg-pink-500 rounded-2xl text-amber-50 px-3 py-1 hover:bg-pink-400">click</button>
        </div>
    </div>
  )
}
export default InputBtn