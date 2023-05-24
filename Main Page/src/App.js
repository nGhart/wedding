import React from 'react'
import Routing from './Routing'
import { BrowserRouter, Link} from "react-router-dom";
import './App.css';
import Footer from './Components/Footer';

function App() {
	return (
        <>
		<BrowserRouter>
        <div className='header'>
            <Link to="/"><h1  className='headerLink'>Wedding Site</h1></Link>
        </div>
        
     <Routing/>
     <Footer/>
    </BrowserRouter>
    </>
	);
}

  
export default App;