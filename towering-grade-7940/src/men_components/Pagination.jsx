import { Box, Button,Text } from "@chakra-ui/react";


export default function Pagination({handlePage,currentPage}){
    const handleClickPrev=()=>{
        handlePage(-1)
    }
    const handleClickNext=()=>{
        handlePage(+1)
    }
    console.log(currentPage)
    return(
        <Box>
                <Button isDisabled={currentPage===1} onClick={handleClickPrev}>Prev</Button>
                <Text as="span">{currentPage}</Text>
                <Button isDisabled={currentPage===3} onClick={handleClickNext}>Next</Button>
        </Box>
    )
}