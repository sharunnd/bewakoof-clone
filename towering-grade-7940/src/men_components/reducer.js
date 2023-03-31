




const reducer=(state,action)=>{
    switch(action.type){
        case "LOADING":{
            return {
                loading:true,
                error:false,
                data:[]
            }
        }
        case "DATA_REQUEST_SUCCESS":{
            return {
                loading:false,
                error:false,
                data:action.payload
            }
        }
        case "DATA_REQUEST_ERROR":{
            return {
                loading:false,
                error:true,
                data:[]
            }
        }
        default :{
            throw new Error(`invalid acion type${action.type}`)
        }
    }
}
const initState={
    searchInput:""
}
const reducer2=(searchState,action)=>{
    switch(action.type){
        case "SEARCH_INPUT":{
            return{
                searchInput:action.payload 
            }
        }
        default :{
            throw new Error(`action type invalid ${action.type}`)
        }
    }
}

export {reducer}
export {reducer2,initState}
