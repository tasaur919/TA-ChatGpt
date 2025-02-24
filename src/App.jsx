import React, { createContext, useContext } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Chatbox from './components/Chatbox/Chatbox'
import Seperation from './components/Seperation/Seperation'
import { dataContext } from './context/UserContext'

function App() {
  //let data=useContext(dataContext)
 // console.log(data);
  
  return (
    <>
    <Sidebar/>
    <Seperation/>
    <Chatbox/>
    </>
  )
}

export default App