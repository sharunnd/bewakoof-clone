import { Box,Button,Divider,Flex,FormControl,IconButton,Image, Input } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import { BsBag } from 'react-icons/bs';
import { AiOutlineUser,AiOutlineHeart } from "react-icons/ai";
import {NavLink} from "react-router-dom"
import logo  from "../logo/colorway-logo-1.png";
import { useReducer, useState } from "react";
import { reducer2,initState } from "../men_components/reducer";

const links = [
    
    {path:"/",text:<Image ml={150}  w={120} src={logo} alt='Dan Abramov' />},
    {path:"/men",text:"MEN"},
    {path:"/women",text:"WOWEN"},
    {path:"/mobile-covers",text:"MOBILE COVERS"}

];

function Navbar() {
    // const {setSearchItems} = useContext(AppContext) 
    const [searchItem,setSearchItem] = useState("") // put this in AppConteXt
    const [searchState,dispatch2] = useReducer(reducer2,initState)
    const {searchInput} = searchState
  const handleSearch=(e)=>{
    e.preventDefault()
    setSearchItem(e.target.value)
  }

  console.log(searchInput)
    return(
        <Box className = "navbar2" border="1px solid black" >
            <Flex>
             {/* <HStack>   */}
            {
                links.map((link)=>(
                    <Box border="1px solid black" ml={50}>
                       <NavLink key={link.path} to={link.path}>{link.text}</NavLink>
                    </Box>

                ))
            }
            <Flex>
            <Box ml={100}>
        
            <FormControl>
            <IconButton onClick={handleSearch} icon={<SearchIcon />} />
            <Input placeholder='Search by products'  w={250} p="auto" onChange={(e)=>dispatch2({type:"SEARCH_INPUT",payload:e.target.value})}/>
            </FormControl>
            </Box>
            <Divider orientation='vertical' ml={5} />
            </Flex>
            <Box ml={50}>
            <NavLink to=""><IconButton bg="white" fontSize='25px' icon={<AiOutlineUser />}/></NavLink>
            <NavLink to="/wishlist"><IconButton bg="white" fontSize='25px' icon={<AiOutlineHeart />}/></NavLink>
            <NavLink to="/bag"><IconButton bg="white" fontSize='20px' icon={<BsBag />}/></NavLink>

            </Box>
           
            </Flex>

        </Box>
    )
}

export { Navbar }
