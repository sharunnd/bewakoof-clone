import { Box,Flex,Image } from "@chakra-ui/react";
import {NavLink} from "react-router-dom"
import logo  from "../logo/colorway-logo-1.png";
const links = [

    {path:"/men",text:"Men"},
    {path:"/women",text:"Women"},
    {path:"/mobile-covers",text:"Mobile Covers"}

];

function Navbar2() {
  
    return(
        <Box className = "navbar" border="1px solid black" >
            <Flex>
            {
                links.map((link)=>(
                    <NavLink key={link.path} to={link.path}>{link.text}</NavLink>
                ))
            }
            </Flex>
        </Box>
    )
}

export { Navbar2 }