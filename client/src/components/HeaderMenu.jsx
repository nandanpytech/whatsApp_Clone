import {React,useState} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu,MenuItem } from '@mui/material';

export default function HeaderMenu({setopenDrawer}) {
    const [open, setopen] = useState(false)

    const handleClose=()=>{
        setopen(false)
        setopenDrawer(true)
    }
    const handleclick=(e)=>{
        setopen(e.currentTarget)
    }
  return (
    <>
      <MoreVertIcon onClick={handleclick}></MoreVertIcon>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={open}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>My Profile</MenuItem>

      </Menu>
    </>
  )
}
