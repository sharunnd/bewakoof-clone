
import axios from "axios"


function getData(obj){
    
    return axios.get(`https://busy-tan-sockeye-hem.cyclic.app/men`,{
        params:obj
    })
}

function getCartData(){
    
    return axios.get(`https://busy-tan-sockeye-hem.cyclic.app/cart`)
}


const deleteWishlistItem=(id)=>{
   
    return axios.delete(`https://busy-tan-sockeye-hem.cyclic.app/cart/${id}`)
        
 }

export {getData}
export {getCartData}
export {deleteWishlistItem}

// {
//     _page:params.page,
//     category:params.category,
//     _sort:params.sort,
//     _order:params.order,
// }