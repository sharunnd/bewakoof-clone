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
                   <Text ml={5} p={2} fontSize={16}><NavLink key={link.path} to={link.path}>{link.text}</NavLink></Text> 
                ))
            }
            </Flex>
        </Center>
    )
}

export { Navbar2 }