import React, { Component } from 'react';
import f2 from './Images/Logo.jpg';
import f3 from './Images/loginlogo.png';
import './css/page.css';
import { Link } from 'react-router-dom';
export const Nav=()=>
{
    return(
        <>
             
             <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src={f2} alt='' width={65} height={65}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to={'/'} class="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to={'/about'} class="nav-link active" >About</Link>
        </li>
        <li class="nav-item">
          <Link to={'/contact'} class="nav-link" >Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<Link to={'/login'}><img src={f3} alt='' width={45} height={45} className='logo'/></Link>
<h2 className='tit' >FIXIT</h2>
        </>
    )
}