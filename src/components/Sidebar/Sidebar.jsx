import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { IoChatboxOutline } from "react-icons/io5";
import { dataContext } from "../../context/UserContext";
function Sidebar() {
  const [extend, setExtend] = useState(false);
  const { sent, recentSearch,newChat } = useContext(dataContext);
  async function loadPrevSearch(prompt) {
    sent(prompt)
  }
  return (
    <>
      <div className="sidebar">
        <GiHamburgerMenu
          id="ham"
          onClick={() => {
            setExtend((prev) => !prev);
            console.log(extend);
          }}
        />
        <div className="plus" onClick={()=>{
          newChat()
        }}>
          <FaPlus />
          {extend ? <p>New Chat</p> : ""}
        </div>
        {recentSearch.map((item, index) => {
          return (
            <div className="chat" onClick={()=>{
             loadPrevSearch(item)
            }}>
              <IoChatboxOutline />
              {extend ? <p>{item.slice(0,15)+"..."}</p> : ""}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Sidebar;
