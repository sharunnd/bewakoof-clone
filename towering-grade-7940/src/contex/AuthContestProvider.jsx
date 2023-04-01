import { Box } from "@chakra-ui/react";
import { createContext, useState } from "react"


export const AuthContext = createContext()

 export default function AuthContextProvider({children}){
    const [isAuth, setisAuth] = useState(false);
    const [searchItem,setSearchItem] = useState("")
    const login=()=>{
        setisAuth(true)
    }
    return (
        <Box>
            <AuthContext.Provider value={{isAuth , login,searchItem,setSearchItem}}>
                {children}
            </AuthContext.Provider>
        </Box>
    )
}