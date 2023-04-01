import { Routes,Route } from "react-router-dom"
import { Men } from "../pages/Mens"
import { Home } from "../pages/Home"
import { Wishlist } from "../pages/Wishlist"
import { Bag } from "../pages/Bag"
import { Login } from "../pages/Login"
import PrivatRoute from "./PrivateRoute"
const AllRoutes = () => {
    return (
        
            
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/men' element={<Men />}/>
                <Route path='/mobile-covers' element={""}/>
                <Route path='/wishlist' element={<PrivatRoute><Wishlist /></PrivatRoute>}/>
                <Route path='/bag' element={<Bag />}/>
                <Route path='/login' element={<Login />}/>

            </Routes>
        
    )
}

export {AllRoutes}