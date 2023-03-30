import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,Breadcrumb,BreadcrumbItem,BreadcrumbLink,Checkbox,Divider,Flex,Grid,GridItem,Heading,HStack,SimpleGrid,Spacer,Stack,Text, textDecoration, VStack} from "@chakra-ui/react"
import { useEffect, useReducer } from "react"
import { reducer } from "../men_components/reducer"
import { Link } from "react-router-dom"
import { getData } from "../api/api"
import { MenProductCard } from "../men_components/MenProductCard"


const initialState={
    loading:false,
    error:false,
    data:[]
}
function Men(){
    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        fetchAndRenderData()
    },[])

    const fetchAndRenderData=async()=>{
        try {
            dispatch({type:"LOADING"})
           let res = await getData() 
           dispatch({type:"DATA_REQUEST_SUCCESS",payload:res.data})

        //    console.log(res)
        } catch (error) {
            dispatch({type:"DATA_REQUEST_ERROR"})
        }
    }
    return (
        <Box>
            <Box>
            <Breadcrumb separator='/'>
               <BreadcrumbItem>
                     <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
               </BreadcrumbItem>

               <BreadcrumbItem isCurrentPage>
                     <BreadcrumbLink as={Link} to="">Men</BreadcrumbLink>
               </BreadcrumbItem>
            </Breadcrumb>
            </Box>
            
            <Flex mt={20}>
                <Box ml={100}>
                <HStack>
                <Heading fontSize={24} textAlign="left" >Men Clothing</Heading>
                <Text fontWeight="light" fontSize={24} >({state.data.length})</Text>
                </HStack>
                 <Divider ml={5}  mb={10} w={20} color="yellow.400" />

                  <Accordion allowToggle w={350}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Category
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel textAlign="left">
                            <Stack>
                               <Checkbox size="sm">T-shirt</Checkbox>
                               <Checkbox size="sm">Jeans</Checkbox>
                               <Checkbox size="sm">Shirt</Checkbox>
                               <Checkbox size="sm">Shorts</Checkbox>
                               <Checkbox size="sm">Jacket</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Sort By
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel textAlign="left">
                            <Stack>
                               <Checkbox size="sm">New</Checkbox>
                               <Checkbox size="sm">Price: High to Low</Checkbox>
                               <Checkbox size="sm">Price: Low to High</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Sizes
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  >
                           <Stack>
                               <Checkbox size="sm">T-shirt</Checkbox>
                               <Checkbox size="sm">Jeans</Checkbox>
                               <Checkbox size="sm">Shirt</Checkbox>
                               <Checkbox size="sm">Shorts</Checkbox>
                               <Checkbox size="sm">Jacket</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Brand
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  >
                           <Stack>
                               <Checkbox size="sm">T-shirt</Checkbox>
                               <Checkbox size="sm">Jeans</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Color
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  >
                           <Stack>
                               <Checkbox size="sm">T-shirt</Checkbox>
                               <Checkbox size="sm">Jeans</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Design
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  >
                           <Stack>
                               <Checkbox size="sm">T-shirt</Checkbox>
                               <Checkbox size="sm">Jeans</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Fit
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  >
                           <Stack>
                               <Checkbox size="sm">T-shirt</Checkbox>
                               <Checkbox size="sm">Jeans</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Sleeve
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  >
                           <Stack>
                               <Checkbox size="sm">T-shirt</Checkbox>
                               <Checkbox size="sm">Jeans</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Neck
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  >
                           <Stack>
                               <Checkbox size="sm">T-shirt</Checkbox>
                               <Checkbox size="sm">Jeans</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Type
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  >
                           <Stack>
                               <Checkbox size="sm">T-shirt</Checkbox>
                               <Checkbox size="sm">Jeans</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Rating
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  >
                           <Stack>
                               <Checkbox size="sm">T-shirt</Checkbox>
                               <Checkbox size="sm">Jeans</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Discount
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  >
                           <Stack>
                               <Checkbox size="sm">T-shirt</Checkbox>
                               <Checkbox size="sm">Jeans</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                    
                </Box>
                <Box mr={150} textAlign="left" mt={20}>
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                    
                   {
                   state?.data.map((item)=>(
                    <MenProductCard key={item.key} {...item}/>
                   ))
                   }
                   
                </Grid>
              </Box>
            </Flex>
        </Box>
    )
}

export {Men}