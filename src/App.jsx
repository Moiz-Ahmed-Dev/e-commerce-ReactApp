import React, { useState } from 'react'
import { Routes, Route,Navigate } from 'react-router-dom'
import Home from './Pages/Home'

import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Page404 from './Pages/Page404'
import Navigation from './Components/Navigation'
import FooterSec from './Components/FooterSec'
import CategoryPage from './Pages/CategoryPage'
import ProductPage from './Pages/ProductPage'

function App() {

const [user,setUser]=useState(true)

  return (
    
<>
<Navigation/>
{
user ? (

  <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products/:productID" element={<ProductPage />} />
        <Route path="/products/category/:categoryName" element={<CategoryPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>


) 

: 


(

  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp/" element={<SignUp />} />
        <Route path="/Login/" element={<Login />} />

        <Route path="*" element={  <Navigate to="/Login" replace={true} />} />
      </Routes>


)

}

<FooterSec/>

</>


  )
}

export default App