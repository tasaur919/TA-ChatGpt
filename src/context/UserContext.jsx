import React, { createContext, useState } from 'react'
import run from '../gemini'
//create context
export const dataContext=createContext()

function UserContext(props) {
   // console.log(props.children);
const [input,setInput]=useState("") //for set input from search box
const [showResult,setShowResult]=useState(false) //show data on topsection
const [loading,setLoading]=useState(false)//waitting for responce animation
const [resultData,setResultData]=useState("")//store the data of responce from gemini
const [preInput,setPreInput]=useState("")
const [recentSearch,setRecentSearch]=useState([])

 async function sent(input){
   setShowResult(true)
   setLoading(true)
   setPreInput(input)
   setResultData("")
   setRecentSearch(prev=>[...prev,input].reverse())//prev matlab recentSearch
   let responce= await run(input)
   setResultData(responce.split("**" && "*"))
   setLoading(false)
   setInput("")
 }

 async function newChat(params) {
   setShowResult(false)
   setLoading(false)
 }

 const data={
    sent,
    input,
    setInput,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    preInput,
    setPreInput,
    recentSearch,
    setRecentSearch,
    newChat
 }
    
  return (
    <>
    <dataContext.Provider value={data}>
   {props.children}
   </dataContext.Provider>
    </>
  )
}

export default UserContext