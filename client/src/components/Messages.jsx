import { Box,styled } from '@mui/material'
import {React,useState,useEffect} from 'react'
import Footer from './Footer'
import image from './assets/Whatsapp.png'
import { useContext } from 'react';
import {AccountContext} from '../context/AccountProvider'
import { getmessages, newmessage } from '../service/Api';
import Allmessages from './Allmessages';





export default function Messages({person,Conversation}) {
  const {account,socket,newmessageblank,setnewmessageblank}=useContext(AccountContext)
  const [incomingMessage, setincomingMessage] = useState(null)
  
  useEffect(()=>{
    socket.current.on("getMessage",data=>{
      setincomingMessage({
        ...data,
        createdAt:Date.now()
      })
    })
  })
  const [messages, setmessages] = useState()
  const [file, setfile] = useState()
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

      socket.current.emit("sentMessage",message)
     await newmessage(message)
     setvalue("")
     setnewmessageblank(prev => !prev)
    }
  }

  useEffect(()=>{
    incomingMessage && Conversation?.members?.includes
    (incomingMessage.senderId) && setmessages((prev)=>[...prev,incomingMessage])
  },[incomingMessage,Conversation])
  useEffect(() => {
    const getmessagedetils=async()=>{ 
      const data=await getmessages(Conversation._id)
      setmessages(data)
      // setnewmessageblank(false)

    }
    getmessagedetils()
  }, [person._id,Conversation._id,newmessageblank])

  const Wrapper=styled(Box)`
  background-image:url(${image});
  `
  const Component=styled(Box)`
  height:77vh;
  `
  return (
    <>
 
    <Wrapper>
      <Component    style={{overflowY:"scroll"}}>
      {
        messages && messages.map((message)=>{
         return (
          <>
          <Box   style={{padding:"5px 80px"}}>
             <Allmessages  message={message}></Allmessages>
          </Box>
          </>
         )
         
       
        })
      }
      </Component>
    <Footer value={value} file={file} setfile={setfile} setvalue={setvalue}   setText={setText}></Footer>
    </Wrapper>
    </>
  )
}
