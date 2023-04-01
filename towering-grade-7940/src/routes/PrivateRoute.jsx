import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../contex/AuthContestProvider"


export default function PrivatRoute(props){

    const {isAuth} = useContext(AuthContext)

    if(!isAuth){
        return <Navigate to="/login"/>
    }
    return props.children
}