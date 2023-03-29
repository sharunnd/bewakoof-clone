import { Routes,Route } from "react-router-dom"
import { Men } from "../pages/Mens"
import { Home } from "../pages/Home"
import { Wishlist } from "../pages/Wishlist"
import { Bag } from "../pages/Bag"
const AllRoutes = () => {
    return (
        
            
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/men' element={<Men />}/>
                <Route path='/mobile-covers' element={""}/>
                <Route path='/wishlist' element={<Wishlist />}/>
                <Route path='/bag' element={<Bag />}/>
            </Routes>
        
    )
}

export {AllRoutes}