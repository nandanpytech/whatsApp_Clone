import React from 'react'
import { InputBase,Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <Box style={{background:"#fff",height:"48px",borderBottom:"1px solid #F2F2F2"}}>
      <Box style={{background:"#f0f2f5", position:"relative", borderRadius:"10px",margin:"6px 13px"}}>
        <Box>
          <SearchIcon style={{position:"absolute",padding:"5px",color:"#919191"}}></SearchIcon>
        </Box>
        <InputBase style={{width:"100%",height:"15px",padding:"16px",paddingLeft:"60px"}} placeholder='Search or start a new chat'></InputBase>
      </Box>
    </Box>
  )
}
