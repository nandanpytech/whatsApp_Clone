import React, { createContext,useState,useRef,useEffect } from 'react'
import {io} from 'socket.io-client'

export const AccountContext=createContext(null)


export default function AccountProvider({children}) {
    const [account, setaccount] = useState()
    const [person, setperson] = useState({})
    const [newmessageblank, setnewmessageblank] = useState(false)

    const [activeusers, setactiveusers] = useState([])

    const socket=useRef();

    useEffect(()=>{
      socket.current=io('ws://localhost:9000') 
    },[])
  return (
    <AccountContext.Provider value={{
        account,setaccount,person,setperson,socket,activeusers,setactiveusers
        ,newmessageblank,setnewmessageblank
    }}>
        {children}
    </AccountContext.Provider>
  )
}
