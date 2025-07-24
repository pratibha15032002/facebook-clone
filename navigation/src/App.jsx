import React from 'react'
import Login from './Login';
import Sign from './Sign'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home';

function App() {

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Sign' element={<Sign/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
        
      
    </>
  )
}

export default App;
