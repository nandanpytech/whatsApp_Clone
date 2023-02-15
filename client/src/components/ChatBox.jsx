import { Box } from '@mui/material'
import {React,useEffect} from 'react'
import Chatheader from './Chatheader'
import Messages from './Messages'
import { useContext,useState } from 'react';
import {AccountContext} from '../context/AccountProvider'
import {getConversation} from '../service/Api'

export default function ChatBox() {
  const {person,account}=useContext(AccountContext)
  const [Conversation, setConversation] = useState({})

  useEffect(() => {
    const getConversationDetails=async()=>{
      let data=await getConversation({senderId:account.sub,reciverId:person.sub})
      setConversation(data)
    }
    getConversationDetails()
  
  }, [person])
  
  return (
    <Box>
        <Chatheader person={person}></Chatheader>
        <Messages Conversation={Conversation} person={person}></Messages>
    </Box>
  )
}
