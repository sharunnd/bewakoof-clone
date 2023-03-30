




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
        case "":{
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

export {reducer}