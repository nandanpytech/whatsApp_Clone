import {React,useState} from 'react'
import Header from './Header'
import { Box } from '@mui/material'
import Search from './Search'
import Conversation from './Conversation'



export default function MenuData() {
  const [text, settext] = useState()
  return (
    <>
    <Box>
      <Header></Header>
      <Search settext={settext}></Search>
      <Conversation text={text}></Conversation>
    </Box>
    </>
  )
}
