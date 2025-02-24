import React, { useContext } from "react";
import "./Chatbox.css";
import Darkmode from "../Darkmode/Darkmode";
import { LuSendHorizontal } from "react-icons/lu";
import { dataContext } from "../../context/UserContext";
import user from "../../assets/user.jpg"
import ai from "../../assets/ai.webp"
function Chatbox() {
const {sent,input,setInput,showResult,showResultData,resultData,loading,preInput}=useContext(dataContext)

  return (
    <div className="chatsection">
      <div className="topsection">
        {!showResult?
        <div className="headings">
          <span>HELLO TASAUVAR,</span>
          <span>I'm Your Own Assistance</span>
          <span>what can I help you...?</span>
        </div>
           :<div className="result">
            <div className="userbox">
              <img src={user} alt=""/>
              <p>{preInput}</p>
            </div>
            <div className="aibox">
              <img src={ai} alt="" />
              {loading?<div className="loader">
                <hr />
                <hr />
                <hr />
                </div>:<p>{resultData}</p>}
              
            </div>
            </div>}
      </div>
      <div className="bottomsection">
        <div className="search">
          <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Enter your promt" value={input} />
          {input?<button id="sentbtn" onClick={()=>{
            sent(input)
          }}><LuSendHorizontal /></button>:null}
          
          <Darkmode />
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
