import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { navbar } from '../utils/navbar'
import Navbar from '../Components/Navbar'
import Filter from '../Components/Filter'

const Root = () => {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
      <Filter/>
      <Routes>
        {
          navbar.map(({path,element})=>{
            return(
              <Route  path={path} element={element}/>
            )
          })
        }
        {/* <Route path='/home' element={<h1>Home</h1>}/>
        <Route path='/properties' element={<h1>Properties</h1>}/> */}
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Root
