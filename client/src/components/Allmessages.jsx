import { Box, Typography } from '@mui/material'
import React from 'react'
import {gettime} from '../timestamp/timestamp'

export default function Allmessages({message}) {
  return (
    <Box style={{background:"#dcf8c6",marginLeft:"auto",maxWidth:"60%",padding:"5px",width:"fit-content",display:"flex",wordBreak:"break-word"}}>
        <Typography>{message.text}</Typography>
        <Typography>{gettime(message.createdAt)}</Typography>
    </Box>
  )
}
