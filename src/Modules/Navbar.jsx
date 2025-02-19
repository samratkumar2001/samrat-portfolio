import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Css/Navbar.css"



const Navbar = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='nav-container'>
                <span className='nav-arrow'>
                    <i class="fa-solid fa-circle-left" onClick={() =>{navigate(-1)}}></i>
                    <i class="fa-solid fa-circle-right" onClick={() =>{navigate(1)}}></i>
                </span>
                <ul>
                    <li onClick={() => navigate('/')}>About Me</li>
                    <li onClick={() => navigate('/projects')}>Projects</li>
                    <li onClick={() => navigate('/resume')}>Resume</li>
                </ul>
            </div>
        </>

    );
}

export default Navbar;