import React, { useEffect,useState } from 'react'
import { Box } from "@mui/system"
import { Typography } from '@mui/material'
import { useContext } from 'react';
import {AccountContext} from '../context/AccountProvider'
import {getConversation,  setConversation } from '../service/Api';
import timestamp from '../timestamp/timestamp'



export default function UserConversation({user}) {
  const {setperson,account,newmessageblank}=useContext(AccountContext)
  const [message, setmessage] = useState({})

 useEffect(()=>{
  const getConversationdetails=async()=>{
    const data = await getConversation({
      senderId:account.sub,
      reciverId:user.sub,
    })
    setmessage({ text:data?.message, timestamp:data?.updatedAt})
  }
  getConversationdetails()
 },[newmessageblank])

  const getuser=async(user)=>{
    setperson(user)
    await setConversation({senderId:account.sub, reciverId:user.sub})
  }
  return (
    <Box onClick={()=>getuser(user)} style={{display:"flex",cursor:"pointer",height:"2.5rem",padding:"13px 0"}}>
        <Box>
           <img width="40px" height="40px" style={{borderRadius:"50%",padding:"0 13px"}} src={user.picture} alt="" />
        </Box>
        <Box>
            <Box>
                <Typography>
                    {user.name}
                </Typography>
                {
                  message?.message && 
                  <Typography>{timestamp(message?.timestamp)}</Typography>
                }
            </Box>
            <Box>
             
            </Box>
        </Box>
    </Box>
  )
}
