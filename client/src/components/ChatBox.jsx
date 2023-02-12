import { Box } from '@mui/material'
import React from 'react'
import Chatheader from './Chatheader'
import Messages from './Messages'
import { useContext } from 'react';
import {AccountContext} from '../context/AccountProvider'

export default function ChatBox() {
  const {person}=useContext(AccountContext)
  return (
    <Box>
        <Chatheader person={person}></Chatheader>
        <Messages person={person}></Messages>
    </Box>
  )
}
