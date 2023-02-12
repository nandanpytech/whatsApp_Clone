import React from 'react'
import {qrCodeImage} from '../constants/data'
import { Dialog,Box, Typography, List, ListItem} from '@mui/material'
import { styled } from '@mui/system';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { useContext } from 'react';
import {AccountContext} from '../context/AccountProvider'
import { addUser } from '../service/Api';


export default function Login() {
    const dailogstyle={
        height:"96%",
        marginTop:"12%",
        width:"80%",
        maxWidth:"100%",
        maxHeight:"100%",
        overflow:"hidden"
    }
    const {setaccount}=useContext(AccountContext)

const StyledList=styled(List)`
        & > li{
          padding:0;
          margin:0;
          line-height:3rem;
          font-size:1.2rem;
          color:#4a4a4a
        }       
`    


const onLoginsuccess=async(res)=>{
  const decode=jwt_decode(res.credential)
  setaccount(decode)
  await addUser(decode)
}
const onLoginerror=(err)=>{
  console.log(err)
}
  return (
    <Dialog PaperProps={{sx:dailogstyle}} hideBackdrop={true} open={true}>
        <Box style={{display:"flex",justifyContent:"space-between"}}>
          <Box style={{padding:"50px 0 50px 50px"}}>
              <Typography style={{fontSize:"34px", marginBottom:"1rem",color:"#525252",fontFamily:"inherit",fontWeight:"100"}}>Use WhatsApp on your computer</Typography>
              <StyledList>
                <ListItem>1. Open Whatsapp on your phone</ListItem>
                <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                <ListItem>3. Tap on Link a Device</ListItem>
                <ListItem>4. Point your phone to this screen to capture the code</ListItem>
              </StyledList>
          </Box>
          <Box style={{position:"relative"}}>
              <img style={{height:"264px",width:"264px",margin:"50px 50px 0 50px"}} src={qrCodeImage} alt="" />
              <Box style={{position:"absolute",top:"45%",left:"25%"}}>
                <GoogleLogin onSuccess={onLoginsuccess} onError={onLoginerror}></GoogleLogin>
              </Box>
          </Box>
        </Box>
    </Dialog>
  )
}
