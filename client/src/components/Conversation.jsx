import { useEffect,useState } from "react"
import React from 'react'
import { getUser } from "../service/Api"
import { Box } from "@mui/system"
import UserConversation from "./UserConversation"
import { useContext } from 'react';
import {AccountContext} from '../context/AccountProvider'
import { Divider } from "@mui/material"



export default function Conversation({text}) {
    const {account, socket, setactiveusers}=useContext(AccountContext)
    const [users, setusers] = useState([])
    useEffect(() => {
      const fetchdata=async()=>{
        let response=await getUser()
        let filterdata=text?response.filter((user)=>user.name.toLowerCase().includes(text.toLowerCase())):response
        setusers(filterdata)
      }

      fetchdata()
    }, [text])
    

    useEffect(()=>{
      socket.current.emit('addUsers',account);
      socket.current.on("getUsers",users=>{
        console.log(users)
        setactiveusers(users)
      })
    },[account])

   
  return (
    <Box style={{overFlow:"overlay",height:"81vh"}}>
        {users.map((user)=>{
            if(user.sub!==account.sub){
               
              return <>
                <UserConversation key={user.id} user={user}></UserConversation>
                <Divider  key={user.id} style={{margin:"0 0 0 70px"}}></Divider>
                </>
            }
        })}
    </Box>
  )
}
