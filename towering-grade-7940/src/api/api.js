
import axios from "axios"


function getData(obj){
    
    return axios.get(`https://json-mock-api-avnq.onrender.com/men`,{
        params:obj
    })
}

function getCartData(){
    
    return axios.get(`https://json-mock-api-avnq.onrender.com/cart`)
}


const deleteWishlistItem=(id)=>{
   
    return axios.delete(`https://json-mock-api-avnq.onrender.com/cart/${id}`)
        
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