
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