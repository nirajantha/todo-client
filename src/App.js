
import React from 'react';
import Signup from './pages/signup';
import Home from './pages/home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
function app(){
  return(

    <div className="app">
    <Routes>
      <Route path="/">
        <Route index element={< Home />}/>
        <Route path='signup' element={< Signup />}/>
        
      </Route>
    </Routes>
    </div>

  
  )
  

}

export default app;

