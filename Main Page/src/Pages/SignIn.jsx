import React from 'react'
// import { Link, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const SignIn = () => {
    // const navigate = useNavigate();
    // function handleClick(event) {
    //     navigate('/guest');
    // }
    return (

        <div className='sign'>
            
            <div className='signChoice'>
                <div className='welcome'>
                    <h1 className='w'>W</h1>
                    <h1 className='e'>E</h1>
                    <h1 className='l'>L</h1>
                    <h1 className='c'>C</h1>
                    <h1 className='o'>O</h1>
                    <h1 className='m'>M</h1>
                    <h1 className='f'>E</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, suscipit, eum quaerat</p>
                <section>
                    <a href='http://localhost:3001/'><button className='signButton'>Guest</button></a>
                    {/* <a href='http://localhost:3002/'><button className='signButton' onClick={handleClick}>Guest</button></a> */}
                    <Link to="items"><button className='signButton'>Planner</button></Link>
                </section>
                <p>Cupiditate illum praesentium assumenda adipisci alias similique</p>
            </div>
        </div>
    )
}

export default SignIn