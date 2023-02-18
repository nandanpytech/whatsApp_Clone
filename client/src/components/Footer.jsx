import {React} from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { Box,styled,InputBase } from '@mui/material';
// import { Uploadfile } from '../service/Api';



export default function Footer({setText,setvalue,value,file,setfile}) {
    
    const Component=styled(Box)`
        & > * {
            margin:5px;
            color:#919191
        }
    `

    const onfilechange=(e)=>{
        setfile(e.target.files[0])
        setvalue(e.target.files[0].name)
    }

    // useEffect(() => {
    //   const getImage=async()=>{
    //     if(file){
    //         const formdata=new FormData();
    //         formdata.append("name",new Blob([file.name],{type : 'text/plain'}))
    //         formdata.append("file",new Blob([file],{type : 'text/plain'}))
    //         await Uploadfile(formdata)
    //     }
    //   }
    //   getImage()
    
    // }, [file])
    
  return (
<Component style={{display:"flex",background:"#ededed",height:"55px",alignItems:"center",padding:"0 15px"}}>
    <InsertEmoticonIcon></InsertEmoticonIcon>
    <label htmlFor="fileinput">
    <AttachFileIcon></AttachFileIcon>
    </label>
    <input type="file" name="" id="fileinput" onChange={onfilechange} style={{display:"none"}}/>
    
    <Box style={{background:"#ffffff", borderRadius:"18px",width:"94%"}}>
        <InputBase style={{width:"100%",padding:"4px", fontSize:"14px",paddingLeft:"10px"}} value={value} placeholder='Type a message' onKeyPress={(e)=>setText(e)} onChange={(e)=>setvalue(e.target.value)}></InputBase>
    </Box>
        <MicIcon></MicIcon>
   </Component>
  )
}
