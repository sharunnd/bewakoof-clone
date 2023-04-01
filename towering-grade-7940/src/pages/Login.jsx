import { Box, Button, Flex, FormControl,Heading,IconButton,Image,Input,SimpleGrid,Text, VStack } from "@chakra-ui/react"
import { AiOutlineFacebook } from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import { AuthContext } from "../contex/AuthContestProvider"
import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"




function Login(){
    const {isAuth,login} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const  [password,setPassword] = useState("")

    function fetchToken(e){
        e.preventDefault()
        const obj={
            email : email,
            password : password
        }

        fetch(`https://reqres.in/api/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        .then((res)=>res.json())
        .then((data)=>{
            login(data.token)
        }
        )
        
    
    }

    if(isAuth){
        return <Navigate to="/wishlist"/>
       }

    return (
        <SimpleGrid columns={2} mt={20} mb={200} >
            <Box >
                <Heading >Welcome to The world of Colorway!</Heading>
                <Image src="https://images.bewakoof.com/web/group-19-1617704502.png" alt="image broken"/>
            </Box>
            <Box alignItems="center">
                <Text fontWeight="600" fontSize={25} mt={10} mb={5}>Log in/Sign up</Text>
                <Text mb={5} fontSize={20} fontWeight="light">for Latest trends, exciting offers and everything Bewakoof!</Text>
                <FormControl>
                    <VStack >
                      <Input w={300} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                      <Input type="password" w={300} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                      <Button bg="teal.400" w={300} onClick={fetchToken}>Continue</Button>
                    </VStack>
                </FormControl>
                <Text mt={10} mb={10}>OR</Text>
                <Flex >
                    <Box m="auto" alignItems="center">
                       <Button mr={5}><IconButton color="blue"  fontSize='20px' icon={<FcGoogle />}/>GOOGLE</Button>
                       <Button ><IconButton color="blue"  fontSize='20px' icon={<AiOutlineFacebook />}/>FACEBOOK</Button>            
                    </Box>
                </Flex>

            </Box>
        </SimpleGrid>
    )
}

export {Login}