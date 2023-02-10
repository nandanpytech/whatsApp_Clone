import React, { useContext,useState } from 'react'
import { Box,styled } from '@mui/material'
import {AccountContext} from '../context/AccountProvider'
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from './drawer/InfoDrawer';


export default function Header() {
    const {account}=useContext(AccountContext)
    const [openDrawer, setopenDrawer] = useState(false)

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

    const toggleDrawer=()=>{
        setopenDrawer(true)
    }
  return (
    <>
    <Box style={{height:"40px",background:"#ededed", display:"flex",alignItems:"center",padding:"8px 16px"}}>
        <img style={{widht:"40px",height:"40px",borderRadius:"50%"}} src={account.picture} alt="" onClick={toggleDrawer}/>      
        <Wrapper >
            <ChatIcon ></ChatIcon>
            <HeaderMenu openDrawer={openDrawer} setopenDrawer={setopenDrawer}></HeaderMenu>
        </Wrapper>
    </Box>
    <InfoDrawer openDrawer={openDrawer} setopenDrawer={setopenDrawer}></InfoDrawer>
    </>
  )
}
