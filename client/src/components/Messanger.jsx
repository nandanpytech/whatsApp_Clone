import React from 'react'
import {AppBar,Toolbar,Box} from '@mui/material'
import Login from './Login'
import { useContext } from 'react';
import {AccountContext} from '../context/AccountProvider'
import ChatDailog from './ChatDailog';




export default function Messanger() {
  const {account}=useContext(AccountContext)
  return (
    <>
    <Box style={{height:"100vh"}}>
      {
        account?
        <>
        <AppBar style={{height:"120px",boxShadow:"none",background:"#00A884"}}>
                <Toolbar></Toolbar>
        </AppBar>
        <ChatDailog></ChatDailog>
        </>

        :

        <>
        <AppBar style={{height:"220px",boxShadow:"none",background:"#00bfa5"}}>
                <Toolbar></Toolbar>
        </AppBar>
        <Login></Login>
        </>    
      }
            
     </Box>        
    </>
  )
}
