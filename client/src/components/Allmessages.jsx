import { Box, Typography,styled } from '@mui/material'
import React from 'react'
import {gettime} from '../timestamp/timestamp'
import { useContext,useState } from 'react';
import {AccountContext} from '../context/AccountProvider'

export default function Allmessages({message}) {
  const {account}=useContext(AccountContext)


  const Text=styled(Typography)`
    font-size:14px;
    padding:0 25px 0 5px;

  `
  
  return (
    <>
      {
        account.sub===message.senderId ?
        <Box style={{background:"#dcf8c6",borderRadius:"5px",marginLeft:"auto",maxWidth:"60%",padding:"5px",width:"fit-content",display:"flex",wordBreak:"break-word"}}>
        <Text>{message.text}</Text>
        <Typography style={{color:"#919191",fontSize:"10px",marginTop:"6px",wordBreak:"break-all"}}>{gettime(message.createdAt)}</Typography>
    </Box>

    :
    <Box style={{background:"#fff",borderRadius:"5px",marginLeft:"2px",maxWidth:"60%",padding:"5px",width:"fit-content",display:"flex",wordBreak:"break-word"}}>
    <Text>{message.text}</Text>
    <Typography style={{color:"#919191",fontSize:"10px",marginTop:"6px",wordBreak:"break-all"}}>{gettime(message.createdAt)}</Typography>
</Box>
        
      }
    </>
   
  )
}
