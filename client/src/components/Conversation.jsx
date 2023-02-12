import { useEffect,useState } from "react"
import React from 'react'
import { getUser } from "../service/Api"
import { Box } from "@mui/system"
import UserConversation from "./UserConversation"
import { useContext } from 'react';
import {AccountContext} from '../context/AccountProvider'
import { Divider } from "@mui/material"


export default function Conversation() {
    const {account}=useContext(AccountContext)
    const [users, setusers] = useState([])
    useEffect(() => {
      const fetchdata=async()=>{
        let response=await getUser()
        setusers(response)
      }

      fetchdata()
    }, [])
    
  return (
    <Box style={{overFlow:"overlay",height:"81vh"}}>
        {users.map((user)=>{
            if(user.sub!=account.sub){
               
              return <>
                <UserConversation user={user}></UserConversation>
                <Divider style={{margin:"0 0 0 70px"}}></Divider>
                </>
            }
        })}
    </Box>
  )
}
