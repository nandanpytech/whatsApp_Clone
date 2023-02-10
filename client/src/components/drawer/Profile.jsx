import { Box, Typography } from '@mui/material'
import React from 'react'
import {AccountContext} from '../../context/AccountProvider'
import { useContext } from 'react';

export default function Profile() {
    const {account}=useContext(AccountContext);
  return (
   <>
   <Box style={{display:"flex",justifyContent:"center"}}>
    <img width="150px" height="150px" style={{borderRadius:"50%",margin:"5px"}} src={account.picture} alt="dp" />
   </Box>

   <Box style={{background:"#fff",padding:"12px 30px 2px",boxShadow:"0 1px 3px rgba(0,0,0,0.08"}}>
    <Typography style={{fontSize:"13px",color:"#009688",fontWeight:"200"}}>Your name</Typography>
    <Typography style={{margin:"14px 0"}}>{account.name}</Typography>
   </Box>

   <Box style={{padding:"15px 20px 28px 30px"}}>
       <Typography style={{color:"#AAAAAA",fontSize:"13px"}}>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
   </Box>
   <Box style={{background:"#fff",padding:"12px 30px 2px",boxShadow:"0 1px 3px rgba(0,0,0,0.08"}}>
     <Typography style={{fontSize:"13px",color:"#009688",fontWeight:"200"}}>About</Typography>
    <Typography style={{margin:"14px 0"}}>....</Typography>
   </Box>
   </>
  )
}
