import {Box,Text} from "@chakra-ui/react"
import axios from "axios"


function getData(obj){
    
    return axios.get(`https://busy-tan-sockeye-hem.cyclic.app/men`,{
        params:obj
    })
}



export {getData}


// {
//     _page:params.page,
//     category:params.category,
//     _sort:params.sort,
//     _order:params.order,
// }