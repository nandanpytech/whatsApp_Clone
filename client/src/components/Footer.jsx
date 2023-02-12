import React from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { Box,styled,InputBase } from '@mui/material';


export default function Footer() {
    const Component=styled(Box)`
        & > * {
            margin:5px;
            color:#919191
        }
    `
  return (
<Component style={{display:"flex",background:"#ededed",height:"55px",alignItems:"center",padding:"0 15px"}}>
    <InsertEmoticonIcon></InsertEmoticonIcon>
    <AttachFileIcon></AttachFileIcon>
    <Box style={{background:"#ffffff", borderRadius:"18px",width:"94%"}}>
        <InputBase style={{width:"100%",padding:"4px", fontSize:"14px",paddingLeft:"10px"}} placeholder='Type a message'></InputBase>
    </Box>
        <MicIcon></MicIcon>
   </Component>
  )
}
