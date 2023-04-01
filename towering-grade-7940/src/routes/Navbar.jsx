import { Box,Divider,Flex,FormControl,HStack,IconButton,
    Image, Input, InputGroup, InputLeftElement, Popover, PopoverBody, PopoverContent, 
    PopoverTrigger } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import { BsBag } from 'react-icons/bs';
import { AiOutlineUser,AiOutlineHeart } from "react-icons/ai";
import {NavLink} from "react-router-dom"
import logo  from "../logo/colorway-logo-1.png";
import { useContext, useState } from "react";

import { AuthContext } from "../contex/AuthContestProvider";

const links = [
    
    {path:"/",text:<Image ml={120}  w={120} src={logo} alt='Dan Abramov' />},
    {path:"/men",text:"MEN"},
    {path:"/women",text:"WOWEN"},
    {path:"/mobile-covers",text:"MOBILE COVERS"}

];

function Navbar() {
    const {searchItem,setSearchItem} = useContext(AuthContext)
    const [query,setQuery] = useState("") 

  const handleSearch=(e)=>{
    e.preventDefault()
    setSearchItem(query)
  }

    return(
        <Box className = "navbar2" borderBottom="1px solid gray" >
            <Flex>
   
            {
                links.map((link)=>(
                    <Box pt={2} ml={50}>
                       <NavLink key={link.path} to={link.path}>{link.text}</NavLink>
                    </Box>

                ))
            }
            <Flex>
            <Box ml={100}>
        
            <FormControl>
               <InputGroup bg="gray.100">
               <InputLeftElement children={<IconButton icon={<SearchIcon />} />}/>
               <Input placeholder='Search by products'  w={250} p="auto" onChange={(e)=>setQuery(e.target.value)}/>
               </InputGroup> 
            </FormControl>
            </Box>
              <Divider orientation='vertical' ml={5} />
            </Flex>
               <Box ml={50}>
            <Popover trigger="hover">
              <PopoverTrigger w='30px'>
                <IconButton bg="white" fontSize='25px' icon={<AiOutlineUser />}/>

                </PopoverTrigger>
                <PopoverContent w={100} bg='white' color='black'>    
                <PopoverBody>
                   <NavLink to="/login">LOGIN</NavLink>
                </PopoverBody>
                </PopoverContent>
            </Popover>
              <NavLink to="/wishlist"><IconButton bg="white" fontSize='25px' icon={<AiOutlineHeart />}/></NavLink>
              <NavLink to="/bag"><IconButton bg="white" fontSize='20px' icon={<BsBag />}/></NavLink>

            </Box>
           
            </Flex>

        </Box>
    )
}

export { Navbar }
