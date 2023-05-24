import './App.css';
import React from 'react'
import Routing from './Routing'
import { BrowserRouter } from "react-router-dom";
import Footer from './Components/Footer';
import Navbars from './Components/Navbars';

function App() {
  return (
    <BrowserRouter className="App">
    <div className='header'>
    <a href='http://localhost:3000/'><h1>Wedding Site</h1></a>
        </div>
        <Navbars/>
  
      <Routing />
      <Footer/> 
    </BrowserRouter>
  );
}

export default App;
