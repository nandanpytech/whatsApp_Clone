
export const addUser=async(data)=>{

    const res=await fetch("/add", {
        method:"POST",
        headers:{
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({
          data
        })
      })
    return res.json()
     
}

export const getUser=async()=>{
    const res=await fetch("/users", {
        method:"GET",
        headers:{
          "Content-Type" : "application/json",
        },
      })

      return res.json()
    
     
}
export const getConversation=async(data)=>{
    const res=await fetch("/getConversation", {
        method:"POST",
        headers:{
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({
          data
        })
      })
      return res.json()
}
export const setConversation=async(data)=>{
    const res=await fetch("/setConversation", {
        method:"POST",
        headers:{
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({
          data
        })
      })

      return res.json()
    
     
}
export const newmessage=async(data)=>{
    const res=await fetch("/newmessage", {
        method:"POST",
        headers:{
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({
          data
        })
      })

      return res.json()
    
     
}
export const getmessages=async(id)=>{
    const res=await fetch(`/getmessages/${id}`, {
        method:"GET",
        headers:{
          "Content-Type" : "application/json",
        },
      })

      return res.json()
    
     
}
export const Uploadfile=async(data)=>{
    const res=await fetch(`/fileupload/`, {
        method:"POST",
        headers:{
          "Content-Type" : "application/json",
        },
        
        body:data
      })

}