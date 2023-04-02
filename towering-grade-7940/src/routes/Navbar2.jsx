import { Box,Center,Flex,Text } from "@chakra-ui/react";
import {NavLink} from "react-router-dom"
const links = [

    {path:"/men",text:"MEN"},
    {path:"/women",text:"WOMEN"},
    {path:"/mobile-covers",text:"MOBILE COVERS"},
    {path:"#",text:"ACCESSORIES"},
    {path:"#",text:"LIVE NOW!"},
    {path:"#",text:"TEENS"}


];

function Navbar2() {
  
    return(
        <Center className = "navbar" borderBottom="1px solid gray" >
            <Flex>
            {
                links.map((link)=>(
                   <Text  p={2} ml={{ base: '10px', md: '20px', lg: '50px' }} fontSize={{ base: '10px', md: '12px', lg: '16px' }}><NavLink key={link.path} to={link.path}>{link.text}</NavLink></Text> 
                ))
            }
            </Flex>
        </Center>
    )
}

export { Navbar2 }