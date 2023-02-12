import React, { createContext,useState } from 'react'

export const AccountContext=createContext(null)


export default function AccountProvider({children}) {
    const [account, setaccount] = useState()
    const [person, setperson] = useState({})
  return (
    <AccountContext.Provider value={{
        account,setaccount,person,setperson
    }}>
        {children}
    </AccountContext.Provider>
  )
}
