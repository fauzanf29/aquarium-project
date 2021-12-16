import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth';

const App = () => {


  return (
  <BrowserRouter> 
    <Container maxWidth="lg">
    <Navbar />
    <Routes>
      <Route path='/Home' element ={<Home/>}/>
      <Route path='/' element ={<Auth/>}/>
    </Routes>
    </Container>
  </BrowserRouter>
  );
};

export default App;
