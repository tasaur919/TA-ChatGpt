import React, { useEffect, useState } from 'react'
import "./Darkmode.css"
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
function Darkmode() {
    const [mode,setMode]=useState("darkmode")
function toggle(){
    if(mode==="darkmode"){
        setMode("lightmode")
       // document.getElementById("btn").innerHTML=<MdOutlineDarkMode />
    }
    else{
        setMode("darkmode")
       // document.getElementById("btn").innerHTML=<CiLight />
    }
}
useEffect(()=>{
    
document.body.className=mode

},[mode])
  return (
    <button id='btn' onClick={()=>{
      toggle()
    }}>{mode==="darkmode"?<CiLight />:<MdOutlineDarkMode/>}</button>
  )
}

export default Darkmode