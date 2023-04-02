import { Box,Sticky,Flex,FormControl,HStack,IconButton,
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
    
    {path:"/",text:<Image ml={{ base: '24px', md: '50px', lg: '120px' }}  w={{ base: '80px', md: '100px', lg: '120px' }} src={logo} alt='Dan Abramov' />},
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
      

        <Box className = "navbar2"  w="100%" bg="white" borderBottom="1px solid gray" position="fixed" top={0} zIndex="10">
            <Flex alignItems="center">
   
            {
                links.map((link)=>(
                    <Box pt={{ base: '1px', md: '2px', lg: '2px' }} ml={{ base: '10px', md: '20px', lg: '50px' }} fontSize={{ base: '10px', md: '12px', lg: '16px' }}>
                       <NavLink key={link.path} to={link.path}>{link.text}</NavLink>
                    </Box>

                ))
            }
            <Flex>
            <Box ml={{ base: '24px', md: '40px', lg: '100px' }}>
        
            <FormControl>
               <InputGroup bg="gray.100">
               <InputLeftElement children={<IconButton  fontSize={{ base: '10px', md: '15px', lg: '15px' }} onClick={handleSearch} icon={<SearchIcon />} />}/>
               <Input placeholder='Search by products'  w={{ base: '100px', md: '200px', lg: '250px' }}  onChange={(e)=>setQuery(e.target.value)}/>
               </InputGroup> 
            </FormControl>
            </Box>
             
            </Flex>
               <Box ml={{ base: '10px', md: '30px', lg: '50px' }}>
            <Popover trigger="hover">
              <PopoverTrigger w={{ base: '10px', md: '20px', lg: '30px' }}>
                <IconButton size={{ base: '5px', md: '10px', lg: '10px' }} bg="white" fontSize={{ base: '10px', md: '20px', lg: '20px' }} ml={{ base: '5px', md: '10px', lg: '10px' }} icon={<AiOutlineUser />}/>

                </PopoverTrigger>
                <PopoverContent w={{ base: '60px', md: '80px', lg: '100px' }} bg='white' color='black'>    
                <PopoverBody>
                   <NavLink to="/login">LOGIN</NavLink>
                </PopoverBody>
                </PopoverContent>
            </Popover>
              <NavLink to="/wishlist"><IconButton size={{ base: '5px', md: '10px', lg: '10px' }} ml={{ base: '5px', md: '10px', lg: '10px' }} bg="white" fontSize={{ base: '10px', md: '20px', lg: '20px' }} icon={<AiOutlineHeart />}/></NavLink>
              <NavLink to="/bag"><IconButton bg="white" size={{ base: '5px', md: '10px', lg: '10px' }} ml={{ base: '5px', md: '10px', lg: '10px' }} fontSize={{ base: '10px', md: '20px', lg: '20px' }} icon={<BsBag />}/></NavLink>

            </Box>
           
            </Flex>

        </Box>
       
    )
}

export { Navbar }
