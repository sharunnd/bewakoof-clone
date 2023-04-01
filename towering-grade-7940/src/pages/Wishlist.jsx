

import {Box,Icon,Spacer,Text,Image, Grid, Stack, IconButton} from "@chakra-ui/react"
import {  useEffect, useState } from "react"
import {AiOutlineTrademarkCircle } from "react-icons/ai"
import { getCartData } from "../api/api"
import { CiCircleRemove } from "react-icons/ci"

import { deleteWishlistItem } from "../api/api"


function Wishlist(){
    const [cartData,setCartData] = useState([])
    useEffect(()=>{
        fetchCartData()
    },[])

  const fetchCartData=async()=>{
    try {
       let res= await getCartData() 
       console.log(res.data)
       setCartData(res.data)
    } catch (error) {
       console.log(error) 
    }
  }
  const handleDelete=(id)=>{
    deleteWishlistItem(id)
      fetchCartData()
   
    
  }
  console.log(cartData)
    return (
        <Box textAlign="left" mt={20}>
          <Grid ml={100} mr={100} templateColumns='repeat(4, 1fr)' gap={6} >
            {
                cartData?.map((item)=>(
                <Box textAlign="left">
                  <Stack position="relative">
                      <Image src={item.img}  alt="image broken" />
                      <IconButton
                      onClick={()=>handleDelete(item.id)}
                      fontSize='25px'
                      bg="transparent"
                      _hover={{bg:"transparent"}}
                      icon={<CiCircleRemove />}
                      aria-label="Remove image"
                      position="absolute"
                      top={0}
                      right={0}
                    />
                  </Stack>
                      <Text>Colorway<Icon as={AiOutlineTrademarkCircle} boxSize={3} /></Text> 
                       <Text fontSize='13px'>{item.title}</Text>
                       <Spacer/>
                      <Text>{`₹${item.price}`}</Text>

                      </Box>               
                    
                ))
            }
        </Grid>
           
           </Box> 
    )
}

export {Wishlist}