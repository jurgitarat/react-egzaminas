import React from 'react';
//import { useState } from "react";
//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { RegisterPage } from './views/RegisterPage/RegisterPage';
import { HomePage } from './views/HomePage/HomePage';
import { LoginPage } from './views/LoginPage/LoginPage';
import { AddPage } from './views/AddPage/AddPage';
import { Navigation } from './components/navi/navi';
// const HomePage = React.lazy(() => import('./views/HomePage/HomePage'));
//const RegisterPage = React.lazy(() => import('./views/RegisterPage/RegisterPage'));
// const LoginPage = React.lazy(() => import('./views/LoginPage/LoginPage'));
// const AddPage = React.lazy(() => import('./views/AddPage/AddPage'));

function App() {

  return (
    <div className="App">
      
      <Navigation />
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>


      
      
    </div>
  );
}

export default App;
