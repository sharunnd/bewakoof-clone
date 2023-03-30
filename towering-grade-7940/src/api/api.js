import {Box,Text} from "@chakra-ui/react"
import axios from "axios"


function getData(){
    return axios.get(`https://busy-tan-sockeye-hem.cyclic.app/men`)
}

export {getData}