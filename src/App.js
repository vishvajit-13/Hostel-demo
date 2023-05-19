// import logo from './logo.svg';
// import { Component } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Componants/Login/Login';
import Home from './Componants/Home/Home';
import Navigation from './Componants/Navigation/Navigation';
import Registration from './Componants/Registration/Registration';
import Landing from './Componants/Landing/Landing';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Registration' element={<Registration />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
