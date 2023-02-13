
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