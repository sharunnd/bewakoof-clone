import img1 from "../homePageImages/img-1.jpg"
import img2 from "../homePageImages/home-2.webp"
import img3 from "../homePageImages/home-3.jpg"
import img4 from "../homePageImages/img-section-2.webp"
import {Box,SimpleGrid,Text,Image} from "@chakra-ui/react"


function Home(){
    return (
        <Box position="relative" top={20}>
            <SimpleGrid columns={3} spacing={5}>
            <Image  src={img1} alt='image link broken' />
            <Image   src={img2} alt='image link broken' />
            <Image src={img3} alt='image link broken' />
            </SimpleGrid>
        
        <Box>
        <Image mt={5} src={img4} alt='image link broken' />
        </Box>
        <Box mt={5}>
        <Text  fontSize={{ base: 'sm', md: 'md', lg: '2xl' }} as='b'>TRENDING CATEGORIES</Text>
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
        <Text  fontSize={{ base: 'sm', md: 'md', lg: '2xl' }} as='b'>TOO HOT TO BE MISSED</Text>
        <SimpleGrid columns={2} gap={5}>
           <Image  src="https://images.bewakoof.com/uploads/grid/app/peanuts-x-snoopy-mid-new-1678791444.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-B3AT999-1679317081.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-anime-wo-bdayunit-1680005306.jpg" alt='image link broken' />
           <Image  src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-boyfriendtees-1679900209.jpg" alt='image link broken' />

        </SimpleGrid>
        
        </Box>
        <Box mt={5}>
        <Text  fontSize={{ base: 'sm', md: 'md', lg: '2xl' }} as='b'>CATEGORIES TO BAG</Text>
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
        <Text  fontSize={{ base: 'sm', md: 'md', lg: '2xl' }} as='b'>TOP ACCESSORIES</Text>
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
        <Text  fontSize={{ base: 'sm', md: 'md', lg: '2xl' }} as='b'>OUR BEST PICKS</Text>
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
        </Box>
    )
}

export {Home}