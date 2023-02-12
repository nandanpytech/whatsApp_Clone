import { Dialog,Box } from '@mui/material'
import React from 'react'
import ChatBox from './ChatBox'
import Emptychat from './Emptychat'
import MenuData from './MenuData'
import { useContext } from 'react';
import {AccountContext} from '../context/AccountProvider'



export default function ChatDailog() {
  const {person}=useContext(AccountContext)

    const dailogstyle={
        height:"96%",
        marginTop:"5%",
        width:"97%",
        maxWidth:"100%",
        maxHeight:"100%",
        overflow:"hidden",
    }



  return (
    <Dialog  PaperProps={{sx:dailogstyle}} hideBackdrop={true} open={true}>
        <Box style={{display:"flex"}}>
            {/* contact  */}
            <Box  style={{minWidth:"450px"}}>
               <MenuData>
                
               </MenuData>
            </Box>

            {/* chat  */}
            <Box style={{width:"75%",minWidth:"300px",height:"100%"}}>
              {Object.keys(person).length?
               <ChatBox></ChatBox>
              :
              <Emptychat></Emptychat>
              }
             
            </Box>
        </Box>
    </Dialog>
  )
}
