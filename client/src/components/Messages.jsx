import { Box,styled } from '@mui/material'
import {React,useState,useEffect} from 'react'
import Footer from './Footer'
import image from './assets/Whatsapp.png'
import { useContext } from 'react';
import {AccountContext} from '../context/AccountProvider'
import { getmessages, newmessage } from '../service/Api';
import Allmessages from './Allmessages';





export default function Messages({person,Conversation}) {
  const {account}=useContext(AccountContext)
  const [messages, setmessages] = useState()
  const [value, setvalue] = useState()
  const setText=async(e)=>{
    const code=e.keyCode || e.which
    if(code===13){
      let message={
        senderId:account.sub,
        reciverId:person.sub,
        Conversation:Conversation._id,
        type:"text",
        text:value

      }
     await newmessage(message)
     setvalue("")
    }
  }

  useEffect(() => {
    const getmessagedetils=async()=>{ 
      const data=await getmessages(Conversation._id)
      setmessages(data)

    }
    getmessagedetils()
  }, [person._id,Conversation._id])

  const Wrapper=styled(Box)`
  background-image:url(${image})
  `
  const Component=styled(Box)`
  height:77vh
  `
  return (
    <>
 
    <Wrapper>
      <Component>
      {
        messages && messages.map((message)=>{
         return <Allmessages message={message}></Allmessages>
        })
      }
      </Component>
    <Footer value={value} setvalue={setvalue}   setText={setText}></Footer>
    </Wrapper>
    </>
  )
}
