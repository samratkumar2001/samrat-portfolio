import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Css/Navbar.css"



const Navbar = () => {

    const navigate = useNavigate();

    return (
        <>
            {/* <div className='nav-container'>
                <span className='nav-arrow'>
                    <i class="fa-solid fa-circle-left" onClick={() =>{navigate(-1)}}></i>
                    <i class="fa-solid fa-circle-right" onClick={() =>{navigate(1)}}></i>
                </span>
                <ul>
                    <li onClick={() => navigate('/')}>About Me</li>
                    <li onClick={() => navigate('/projects')}>Projects</li>
                    <li onClick={() => navigate('/resume')}>Resume</li>
                </ul>
            </div> */}



<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" onClick={() => navigate('/')}>Portfolio</a>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={() => navigate('/')}>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={() => navigate('/projects')}>Projects</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" onClick={() => navigate('/resume')}>Resume</a>
        </li> */}
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu">
            <li>
                <a class="dropdown-item" href="#"><i style={{marginInline:'.5rem'}} class="fa-solid fa-diagram-project"></i> Side Projects</a>
            </li>
            <li>
                <a class="dropdown-item" onClick={() => navigate('/resume')}><i style={{marginInline:'.6rem'}} class="fa-solid fa-file"></i> Resume</a>
            </li>
            <li>
                <a class="dropdown-item" href="#"><i style={{marginInline:'.5rem'}} class="fa-solid fa-phone"></i> Contact Me</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>







        </>

    );
}

export default Navbar;