import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

const NavTab = () => {
    return (
        <header className='nav-main-container'>
            <div className='nav-container'>
                <div className='menu-link'>    
                    <Link to='/dashboard'>Dashboard</Link>
                </div>

                <div className='menu-link'>
                    <Link to='/history'>Saved Strains</Link>
                </div>

                <div className='menu-link'>
                    <Link to='/strains'>Strains Library</Link>
                </div>   

                {/* <div className='menu-link'>
                    <Link to='/learn'>Learn More </Link>
                </div> */}

                <div className='menu-link'>
                    <Link to='/contact'>Contact Us </Link>
                </div>

                {/* <div className='menu-link'>
                    <Link to='/about'>About</Link>
                </div>  */}

                <hr></hr>

                <div className='menu-link'> 
                    <Link to='/login'>Log In</Link>
                </div>

                <div className='menu-link'>
                    <Link to='/register'>Sign Up</Link>
                </div>
            </div> 
        </header>
    );
};

export default NavTab;