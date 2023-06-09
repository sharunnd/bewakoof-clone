import { Text,Image, GridItem, Flex, Spacer, IconButton} from "@chakra-ui/react";
import { useState } from "react";
import {AiFillHeart,AiOutlineHeart,AiOutlineTrademarkCircle} from "react-icons/ai"
import { Icon } from "@chakra-ui/react";
import axios from "axios";



function MenProductCard({id,price,title,img}){

    const [toggleHeart,setToggleHeart] = useState(false)


    function cartData (){
      let cart = {id,price,title,img};
      axios.post("https://json-mock-api-avnq.onrender.com/cart",cart).then(()=>{
        
        
      })
    }
    
    const handleAddCart=async()=>{
        setToggleHeart(true)
        cartData()
    }
   
    
    const handleRemoveCartItem=()=>{
        setToggleHeart(false)
        
    }

 
    return (
        <GridItem>

           <Image src={img} alt="image broken"/>
           
             <Text>Colorway<Icon as={AiOutlineTrademarkCircle} boxSize={3} /></Text>             
           <Flex>
             <Text fontSize='13px'>{title}</Text>
           <Spacer/>
           {
            toggleHeart ? <IconButton onClick={handleRemoveCartItem}  _hover={{bg:"white"}} color="red"bg="white"  fontSize='20px' icon={<AiFillHeart />}/> :
            <IconButton onClick={handleAddCart}  _hover={{bg:"white"}} bg="white" fontSize='20px' icon={<AiOutlineHeart />}/>
           }
           
           </Flex>
            
           <Text>{`₹${price}`}</Text> 
        </GridItem>
    )
}
export {MenProductCard}