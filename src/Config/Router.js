import React from 'react'
import { Route, Routes,Link } from 'react-router'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Service from '../Components/Service'
import Error from '../Components/Error'
import Home from '../Components/Home'

const Router = () => {
    return (
        <>
        <Routes>
           <Route path="/" element={<Home />}  />
           <Route path="/about" element={<About />}  />
           <Route path="/contact" element={<Contact />}  />
           <Route path="/service" element={<Service />}  />
           <Route path="*" element={<Error />}  />

           </Routes>
        </>
    )
}

export default Router
