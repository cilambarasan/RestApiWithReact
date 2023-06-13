import React, { Component } from 'react';
import f1 from './Images/Home.jpg';


import f4 from './Images/book.png';
import f5 from './Images/Deliver.png';
import f6 from './Images/Pickup2.gif';
import f7 from './Images/las.jpg';
import './css/page.css';
export const Home=()=>{
    return(
        <>

<marquee><h3 className='title'>Festival Offer Is Live!</h3></marquee>
<h2 className='tit' >FIXIT</h2>
<div className='info'>
    <p className='par'>Smartphone Repair Now At <br></br><center> Your Doorstep</center></p>
</div>

    <img src={f4} alt='' width={55} height={55} className='img'/>
    <img src={f5} alt='' width={55} height={55} className='img1'/>
    <img src={f6} alt='' width={55} height={55} className='img2'/>
    <img src={f7} alt='' width={55} height={55} className='img3'/>
   <h4 className='p1'>Book Your Repair</h4>
   <h4 className='p2'>Receive & Pay</h4>
   <h4 className='p3'>Free Pick-Up</h4>
   <h4 className='p4'>30 Days Service Warranty</h4>
           
           <img src={f1} alt='' width={900} height={500}   className='home'/>
          
        </>
    )
}