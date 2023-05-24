import React from 'react'

import { Link} from 'react-router-dom';

const Homepage = () => {
  return (
    <div className='home'>
      <div className='homeText'>
        <h2>Lorem ipsum dolor</h2>
      <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h6>
      <div>
      <Link to="sign"><button className='homeButton'>Get Started</button></Link>
      </div> 
      </div>
      
    </div>
  )
}

export default Homepage