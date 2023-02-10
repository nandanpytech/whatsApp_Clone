import { Drawer, Typography,Box } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';

export default function InfoDrawer({openDrawer,setopenDrawer}) {
const handleclose=()=>{
    setopenDrawer(false)
}
const Drawerstyle={
    left:"20px",
    top:"25px",
    height:"95%",
    width:"36%",
    boxShadow:"none",
}
  return (
    <Drawer
    open={openDrawer}
    onClose={handleclose}
    PaperProps={{sx:Drawerstyle}}
    style={{zIndex:1500}}
    >
        <Box style={{background:"#008069",height:"107px",color:"#fff",display:"flex"}}>
            <ArrowBackIcon style={{marginTop:"auto",padding:"15px",fontWeight:"600"}} onClick={handleclose}></ArrowBackIcon>
            <Typography  style={{marginTop:"auto",padding:"15px",fontWeight:"600"}} >Profile</Typography>
        </Box>
        <Box style={{background:"#ededed"}}>
            <Profile></Profile>
        </Box>
    </Drawer>
  )
}
