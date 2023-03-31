import { Box,Text,Image, GridItem, Button, Flex, Spacer, IconButton, HStack } from "@chakra-ui/react";
import { useState } from "react";
import {AiFillHeart,AiOutlineHeart,AiOutlineTrademarkCircle} from "react-icons/ai"
import { Icon } from "@chakra-ui/react";
import axios from "axios";
import { cartData } from "../api/api";


function MenProductCard({id,price,title,img}){
    const [cartItems,setCart] = useState()
    const [toggleHeart,setToggleHeart] = useState(false)


    function cartData (){
      let cart = {id,price,title,img};
      axios.post("https://busy-tan-sockeye-hem.cyclic.app/cart",cart).then(()=>{
        // getData from cart and display in UI
      })
    }
    
    const handleAddCart=async()=>{
        setToggleHeart(false)
        cartData()
    }
   
    
    const handleRemoveCartItem=()=>{
        setToggleHeart(true)
        
    }

 
    return (
        <GridItem>
           <Image src={img} alt="image broken"/>
             <Text>Colorway<Icon as={AiOutlineTrademarkCircle} boxSize={3} /></Text>             
           <Flex>
             <Text fontSize='13px'>{title}</Text>
           <Spacer/>
           {
            toggleHeart ? <IconButton onClick={handleAddCart} _hover={{bg:"white"}} color="red"bg="white"  fontSize='20px' icon={<AiFillHeart />}/> :
            <IconButton onClick={handleRemoveCartItem} _hover={{bg:"white"}} bg="white" fontSize='20px' icon={<AiOutlineHeart />}/>
           }
           
           </Flex>
            
           <Text>{`₹${price}`}</Text> 
        </GridItem>
    )
}
export {MenProductCard}