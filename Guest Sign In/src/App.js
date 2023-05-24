import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import GuestSign from './Components/GuestSign';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='header'>
      <a href='http://localhost:3000/'><h1>Wedding Site</h1></a>
        </div>
        <GuestSign/>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
