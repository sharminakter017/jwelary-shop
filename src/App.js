import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Title from './components/Title/Title'
import About from './pages/About Us/About'
import Blog from './pages/Blog/Blog'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Services from './pages/Services/Services'
import SingleProduct from './pages/SingleProduct/SingleProduct'



const App = () => {
  return (
   <>


   <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Home />} />
    <Route path='/:slug' element = {<SingleProduct />} />
    <Route path='/about' element = {<About />} />
    <Route path='/portfolio' element = {<Portfolio />} />
    <Route path='/service' element = {<Services />} />
    <Route path='/blog' element = {<Blog />} />
   </Routes>
   
   </BrowserRouter>

   
   
   
   </>
  )
}

export default App