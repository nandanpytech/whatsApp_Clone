import React from 'react'
import { Box } from "@mui/system"
import { Typography } from '@mui/material'
import { useContext } from 'react';
import {AccountContext} from '../context/AccountProvider'


export default function UserConversation({user}) {
  const {setperson}=useContext(AccountContext)
  const getuser=(user)=>{
    setperson(user)
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
            </Box>
        </Box>
    </Box>
  )
}
