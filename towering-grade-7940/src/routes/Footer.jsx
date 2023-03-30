import { Box, Button, Center, FormControl, Heading, HStack, IconButton, Input, SimpleGrid,Text,Image } from "@chakra-ui/react";
import { AiOutlineApple, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { BsPinterest, BsSnapchat } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import img7 from "../footer-images/google-store.png"
import img8 from "../footer-images/apple-store.png"


function Footer(){
    return (
        <Box bg="black" color="white">
        <Heading color="yellow.400" textAlign="left" ml={120} mt={50}>Colorway</Heading>

         <Center>
          <SimpleGrid columns={4} textAlign="left" mt={50}>
            
            <Box>
               <Text color="yellow.400" mb={5}>CUSTOMER SERVICE</Text>
               <Text>Contact us</Text>
               <Text>Track order</Text>
               <Text>Return order</Text>
               <Text>Cancel order</Text>
               <Box mt={10}>
               <Text>15 Days return policy</Text>
               <Text>Cash on delivery</Text>
            </Box>
            </Box>
            {/* <Spacer></Spacer> */}
            <Box w={300} >
               <Text color="yellow.400" mb={5}>COMPANY</Text>
               <Text>About us</Text>
               <Text>We're Hiring</Text>
               <Text>Terms and Conditions</Text>
               <Text>Privacy Policy</Text>
               <Text>Blog</Text>
               <Box mt={15}>
                <Text mb={5} color="yellow.400">DOWNLOAD THE APP</Text>   
                <Image w={200} src={img7} alt="image link broken"/>

               </Box>
            </Box>
            <Box>
               <Text color="yellow.400" mb={5}>CONNECT WITH US</Text>
            <Text><IconButton bg="black" fontSize='20px' icon={<AiOutlineFacebook />}/>4.7M People like this</Text>
            <Text><IconButton bg="black" fontSize='20px' icon={<AiOutlineInstagram />}/>1M Followers</Text>
            <HStack>
            <Text><IconButton bg="black" fontSize='20px' icon={<CiTwitter />}/></Text>
            <Text><IconButton bg="black" fontSize='20px' icon={<BsPinterest />}/></Text>
            <Text><IconButton bg="black" fontSize='20px' icon={<BsSnapchat />}/></Text>
            <Text><IconButton bg="black" fontSize='20px' icon={<AiOutlineApple />}/></Text>
           
            </HStack>
            <Box mt={15}>
                 <Text mb={5} color="yellow.400">100% SECURE PAYMENT</Text>
                 <Image src={img8} alt="image link broken"/>

            </Box>
            </Box>
            <Box>
               <Text color="yellow.400" mb={5}>KEEP UP TO DATE</Text>
               
                  <FormControl>
                  <HStack>
                     <Input borderRadius="none" placeholder="Enter Email ID" borderTop="none" borderLeft="none"/>
                     <Button color="black" borderRadius="none" bg="yellow.400">Subscribe</Button>
                  </HStack>
                  </FormControl>
            </Box>
          </SimpleGrid>
          </Center>
          <Center>
          <SimpleGrid mt={30} columns={4} textAlign="left">
            
            
            
          </SimpleGrid>
          </Center>
        </Box>
    )
}

export {Footer}