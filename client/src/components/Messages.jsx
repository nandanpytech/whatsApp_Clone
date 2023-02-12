import { Box,styled } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import image from './assets/Whatsapp.png'




export default function Messages() {
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

      </Component>
    <Footer></Footer>
    </Wrapper>
    </>
  )
}
