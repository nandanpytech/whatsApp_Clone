import React, { useContext } from 'react'
import { Box,styled } from '@mui/material'
import {AccountContext} from '../context/AccountProvider'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Header() {
    const {account}=useContext(AccountContext)

    const Wrapper=styled(Box)`
    margin-left:auto;
    &>*{
        margin-left:2px;
        padding:8px;
        cursor:pointer
        
    };
    & :first-child{
        font-size:22px;
        margin-right:8px;
        margin-top:3px;
    }

    `
  return (
    <>
    <Box style={{height:"40px",background:"#ededed", display:"flex",alignItems:"center",padding:"8px 16px"}}>
        <img style={{widht:"40px",height:"40px",borderRadius:"50%"}} src={account.picture} alt="" />
        <Wrapper >
            <ChatIcon ></ChatIcon>
            <MoreVertIcon></MoreVertIcon>
        </Wrapper>
    </Box>
    </>
  )
}
