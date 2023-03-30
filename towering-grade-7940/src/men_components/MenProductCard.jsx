import { Box,Text,Image, GridItem, Button, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai"

function MenProductCard({price,title,img}){
    const [toggleHeart,setToggleHeart] = useState(false)
    const handleAddCart=()=>{
        setToggleHeart(false)
    }
    const handleRemoveCartItem=()=>{
        setToggleHeart(true)
    }
    return (
        <GridItem>
           <Image src={img} alt="image broken"/>
           <Text>Colorway</Text> 
           <Flex>
           <Text>{title}</Text>
           <Spacer/>
           {
            toggleHeart ? <IconButton onClick={handleAddCart} _hover={{bg:"white"}} color="red"bg="white"  fontSize='25px' icon={<AiFillHeart />}/> :
            <IconButton onClick={handleRemoveCartItem} _hover={{bg:"white"}} bg="white" fontSize='25px' icon={<AiOutlineHeart />}/>
           }
           
           </Flex>
            
           <Text>{`₹${price}`}</Text> 
        </GridItem>
    )
}

export {MenProductCard}