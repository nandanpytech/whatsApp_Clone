import {React} from 'react'
import { Box, Divider, Typography } from '@mui/material'

import {emptyChatImage} from '../constants/data'

export default function Emptychat() {
  return (
    <Box style={{background:"#f8f9fa",padding:"30px 0",textAlign:"center",height:"100%"}}>
      <Box >
        <img height="250px" width="350px" src={emptyChatImage} alt="" />
        <Typography style={{fontSize:"32px",margin:"25px 0 10px",fontFamily:"inherit",color:"#41525d"}}>WhatsApp Web</Typography>
        <Typography style={{fontSize:"14px",color:"#667781",fontFamily:"inherit"}}>Now send and receive messages without keeping your phone online.</Typography>
        <Typography style={{fontSize:"14px",color:"#667781",fontFamily:"inherit"}}>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Typography>
        <Divider style={{opacity:"0.8",margin:"40px"}}></Divider>
      </Box>
    </Box>
  )
}
