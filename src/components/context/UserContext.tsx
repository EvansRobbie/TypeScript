import React, { createContext, useContext, useState } from "react"


export type AuthUser = {
    name:string
    email:string
}
type ChildrenProps = {
    children: React.ReactNode
}
type userContextProviders = {
    user: AuthUser | null
    setUser:  React.Dispatch<React.SetStateAction<AuthUser | null>>
}
// export const UserContext = createContext<userContextProviders | null>(null)
// type assertion
export const UserContext = createContext({} as userContextProviders)

const UserContextProvider = ({children}: ChildrenProps) => {
    const [user, setUser] = useState<AuthUser | null >(null)
  return (
    <UserContext.Provider value= {{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
// export const useUserContext = () =>{
//     return useContext(UserContext)
// }
export default UserContextProvider