import Navbar from "../sections/Navbar/Navbar.jsx"
import Footer from "../sections/Footer/Footer.jsx"

import { Outlet } from "react-router-dom"
function RootLayout() {
  return (
    <>
        <Navbar/>
        <Outlet/> 
        <Footer/>
    </>
  )
}

export default RootLayout