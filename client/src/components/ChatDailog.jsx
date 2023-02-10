import { Dialog,Box } from '@mui/material'
import React from 'react'
import Emptychat from './Emptychat'
import MenuData from './MenuData'


export default function ChatDailog() {

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
              <Emptychat></Emptychat>
            </Box>
        </Box>
    </Dialog>
  )
}
