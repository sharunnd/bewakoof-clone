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
        
            <Flex justifyContent="center" border="1px solid gray" bg="white"  w="100%" position="fixed" top={10} zIndex="1"  >
                
            {
                links.map((link)=>(
                  
                   <Text  p={2} ml={{ base: '10px', md: '20px', lg: '50px' }} fontSize={{ base: '10px', md: '12px', lg: '16px' }}><NavLink key={link.path} to={link.path}>{link.text}</NavLink></Text> 
                   
                ))
            }
            
            </Flex>
       
    )
}

export { Navbar2 }