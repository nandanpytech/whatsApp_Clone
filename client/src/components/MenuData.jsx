import React from 'react'
import Header from './Header'
import { Box } from '@mui/material'
import Search from './Search'
import Conversation from './Conversation'



export default function MenuData() {
  return (
    <>
    <Box>
      <Header></Header>
      <Search></Search>
      <Conversation></Conversation>
    </Box>
    </>
  )
}
