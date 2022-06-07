import { Route, Routes } from "react-router-dom"
import { About } from "./about"
import { Home } from "./Home"
import { Navbar } from "./Navbar"
import { Product } from "./Products"


export const AllRoutes=()=>{

    return(
        <div>
            <Navbar/>
         <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/product" element={<Product/>}/>
         </Routes>
    
          
        </div>
    )
}