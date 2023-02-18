import {Box, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext } from 'react';
import {AccountContext} from '../context/AccountProvider'


export default function Chatheader({person}) {
  const {activeusers}=useContext(AccountContext)

  return (
    <Box style={{height:"52px",display:"flex",alignItems:"center",background:"#ededed"}}>
        <img height="40px" width="40px" style={{borderRadius:"50%",objectFit:"cover"}} src={person.picture} alt="" />
        <Box>
            <Typography style={{marginLeft:"13px"}}>{person.name}</Typography>
            <Typography style={{marginLeft:"13px",fontSize:"12px",color:"rgba(0,0,0,0.6)"}}>{activeusers?.find(user=>user.sub === person.sub)? 'online':"Offline"}</Typography>
        </Box>
        <Box style={{marginLeft:"auto"}}>
            <SearchIcon style={{padding:"8px",fontSize:"24px",color:"black"}}></SearchIcon>
            <MoreVertIcon style={{padding:"8px",fontSize:"24px",color:"black"}}></MoreVertIcon>
        </Box>
    </Box>
  )
}
