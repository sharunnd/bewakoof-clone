import img1 from "../homePageImages/img-1.jpg"
import img2 from "../homePageImages/home-2.webp"
import img3 from "../homePageImages/home-3.jpg"
import img4 from "../homePageImages/img-section-2.webp"
import img5 from "../homePageImages/designs-o-t-week.webp"
import img6 from "../homePageImages/d-o-t-week-2.webp"
import { AiOutlineFacebook,AiOutlineInstagram,AiOutlineApple } from "react-icons/ai";
import {Box,SimpleGrid,Text,Image, Heading, IconButton, VStack, HStack, Center, Spacer, Input, Button, FormControl} from "@chakra-ui/react"
import { BsSnapchat,BsPinterest } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import img7 from "../footer-images/google-store.png"
import img8 from "../footer-images/apple-store.png"

function Home(){
    return (
        <Box>
            <SimpleGrid columns={3} spacing={5}>
            <Image  src={img1} alt='image link broken' />
            <Image   src={img2} alt='image link broken' />
            <Image src={img3} alt='image link broken' />
            </SimpleGrid>
        
        <Box>
        <Image mt={5} src={img4} alt='image link broken' />
        </Box>
        <Box mt={5}>
        <Text  fontSize='2xl' as='b'>TRENDING CATEGORIS</Text>
        <SimpleGrid columns={6} gap={5}>
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-Printed-Tshirt--1--1675842429.png" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-ovrszd-1676537032.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-ovrszd-tees-m-1677580843.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668772677.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/vests-category-icon-1675844905.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-Full-Sleeve-Tshirt-1673010261-1676129954.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tshirts-1668773246.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-overszd-w--1--1677658025.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-ovrszd-tees-w-1677580843.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668773245.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-w-dresses-1675144062.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-boyfriend-tees-1675319582.jpg" alt='image link broken' />

        </SimpleGrid>
        
        </Box>
        <Box mt={5}>
        <Text  fontSize='2xl' as='b'>TOO HOT TO BE MISSED</Text>
        <SimpleGrid columns={2} gap={5}>
           <Image  src="https://images.bewakoof.com/uploads/grid/app/peanuts-x-snoopy-mid-new-1678791444.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-B3AT999-1679317081.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-anime-wo-bdayunit-1680005306.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-boyfriendtees-1679900209.jpg" alt='image link broken' />

        </SimpleGrid>
        
        </Box>
        <Box mt={5}>
        <Text  fontSize='2xl' as='b'>CATEGORIS TO BAG</Text>
        <SimpleGrid columns={6} gap={5}>
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-Jeans-men-1672915059.png" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-Shorts-Men-1678950685.png" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-pyjamas-1668772679.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1669360792.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-w-pyjamas-2-1675144063.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-Shorts-Women-1678950685.png" alt='image link broken' />

        </SimpleGrid>
        
        </Box>
        <Box mt={7}>
        <SimpleGrid columns={3} gap={5}>
           <Image  src="https://images.bewakoof.com/uploads/grid/app/1x1-oversized-graphic-tes-img-change-1678791443.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/static-1x1-Boxers-1679333494.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/static-1x1-Ribbed-001-1679333495.jpg" alt='image link broken' />
        </SimpleGrid>
        
        </Box>
        <Box mt={5}>
        <Text  fontSize='2xl' as='b'>TOP ACCESSORIES</Text>
        <SimpleGrid columns={6} gap={5}>
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-sliders-men-1672907494.png" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-Mobile-covers-1672907490.png" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1672907481.png" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-Phone-gripper-1678944026.png" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/mugs-category-box-1678791481.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/category-box-caps-1672907483.png" alt='image link broken' />

        </SimpleGrid>
        
        </Box>
        <Box mt={5}>
        <Text  fontSize='2xl' as='b'>OUR BEST PICKS</Text>
        <SimpleGrid columns={2} gap={5}>
           <Image  src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-ovrszd-srtwr-dresses-1675243399.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-bts-new--1--1678448933.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/plus-size-mid-banner-1671788992.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-combo--tees--1--1677756409.gif" alt='image link broken' />
        </SimpleGrid> 
        </Box>

        <Box mt={5}>
           <Image  src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg" alt='image link broken' />
        </Box>

        <Box mt={5}>
           <Image  src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg" alt='image link broken' />
        </Box>

        {/* footer */}
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
        </Box>
    )
}

export {Home}