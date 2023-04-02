import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,Breadcrumb,BreadcrumbItem,BreadcrumbLink,Checkbox,Divider,Flex,Grid,Heading,HStack,Stack,Text} from "@chakra-ui/react"
import { useContext, useEffect, useReducer, useState } from "react"
import { reducer } from "../men_components/reducer"
import { Link, useSearchParams } from "react-router-dom"
import { getData } from "../api/api"
import { MenProductCard } from "../men_components/MenProductCard"
import Pagination from "../men_components/Pagination"
import { SpinnerIcon } from "@chakra-ui/icons"
import { AuthContext } from "../contex/AuthContestProvider"


const initialState={
    loading:false,
    error:false,
    data:[]
}

function Men(){

    const {searchItem} = useContext(AuthContext)
    const [state,dispatch] = useReducer(reducer,initialState)
    const [searchParams, setSearchParams] = useSearchParams()
    const initPage = Number(searchParams.get("page"))
    const [page,setPage] = useState(initPage || 1)
    const [order,setOrder] = useState([])
    const [category,setCategory] = useState([])
 
    useEffect(()=>{
        fetchAndRenderData(page)
    },[page,order,category,searchItem])

    useEffect(() => {
        setSearchParams({ page: page});
      }, [page]);

 
    const fetchAndRenderData=async(page)=>{
        let obj = {_page:page,_limit:9};
        if(order){
            obj._sort="price"
            obj._order=order
        }
        if(category){
            obj.category=category
        }
        if(searchItem){
            obj.q=searchItem
        }
        try {
            dispatch({type:"LOADING"})
           let res = await getData(obj,"mens") 
           dispatch({type:"DATA_REQUEST_SUCCESS",payload:res.data})

        //    console.log(res)
        } catch (error) {
            dispatch({type:"DATA_REQUEST_ERROR"})
        }
    }
    const handlePage=(pageNum)=>{
        setPage(page+pageNum)
    }
      

    const handleSortDesc=(e)=>{
        
        setOrder(e.target.checked ? "desc" : [])
       
    }
    const handleSortAsc=(e)=>{
        
        setOrder(e.target.checked ? "asc" : [])
    }
//   const {searchitems} = useContext(AuthContext) 


  // useeffect(()=>{
 //   if(searchItems){ setSearchParams({q:searchItems})} and call the api and pass the params in an  obj {}
      // })
      const {data,loading,error} = state
      console.log(searchItem)

    return (
        <Box>
            <Box ml={{ base: '10px', md: '15px', lg: '110px' }} mt={5} fontSize={12}>
            <Breadcrumb separator='/'>
               <BreadcrumbItem>
                     <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
               </BreadcrumbItem>

               <BreadcrumbItem isCurrentPage>
                     <BreadcrumbLink as={Link} to="">Men</BreadcrumbLink>
               </BreadcrumbItem>
            </Breadcrumb>
            </Box>
            
            <Flex mt={{ base: '5px', md: '5px', lg: '10px' }}>
                <Box ml={{ base: '10px', md: '15px', lg: '100px' }}>
                <HStack>
                <Heading fontSize={{ base: '15px', md: '15px', lg: '24px' }} textAlign="left" >Men Clothing</Heading>
                <Text fontWeight="light" fontSize={{ base: '15px', md: '15px', lg: '24px' }} >({state.data.length})</Text>
                </HStack>
                 <Divider ml={5}  mb={10} w={20} color="yellow.400" />

                  <Accordion allowToggle w={{ base: '150px', md: '150px', lg: '300px' }}>
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
                               <Checkbox defaultChecked={category.includes("jeans")} size="sm" onChange={(e)=>setCategory(e.target.checked ? "jeans" : [])}>Jeans</Checkbox>
                               <Checkbox size="sm" onChange={(e)=>setCategory(e.target.checked ? "shirt" : [])}>Shirt</Checkbox>
                               <Checkbox size="sm" onChange={(e)=>setCategory(e.target.checked ? "t-shirt" : [])}>T-Shirt</Checkbox>
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
                               <Checkbox  size="sm" onChange={handleSortDesc}>Price: High to Low</Checkbox>
                               <Checkbox  size="sm" onChange={handleSortAsc}>Price: Low to High</Checkbox>
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
                               <Checkbox size="sm">shirt</Checkbox>
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
                <Box mr={{ base: '30px', md: '100px', lg: '150px' }} textAlign="left" mt={20}>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
                    
                   {loading ? <SpinnerIcon ml={{ base: '100px', md: '200px', lg: '300px' }} fontSize={{ base: '20px', md: '30px', lg: '40px' }}/> : error ? <Text>Something went wrong</Text> :
                  data?.map((item)=>(
                    <MenProductCard key={item.key} {...item}/>
                   ))
                   }
                   
                </Grid>
              </Box>
            </Flex>
            <Box>
                <Pagination handlePage={handlePage} currentPage={page}/>
            </Box>
        </Box>
    )
}

export {Men}