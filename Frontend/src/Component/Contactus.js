import React, { Component } from 'react';
import './css/contact.css'
import f1 from'./Images/c1.png';
import f2 from'./Images/c2.png';
import f3 from'./Images/c3.png';
export const Contact=()=>
{
    return(
        <>
         <center><p className='contact'>Contact Us</p></center> 
         <p className='ti1'>Ready to upgrade your phone service? Get in touch with us today to discuss your needs and explore our<br></br> range of services.
          Our dedicated team is eager to assist you in finding the perfect phone solution for you.</p>
         <div className='c1'>
            <img src={f1} alt='' className='ci1' width={110} height={110}/>
             <p className='cp1'> FIXIT,No 13,Kk Nagar,Coimbatore,TamilNadu</p>
             <p className='cp2'>Opening Time:10:00AM<br></br>Closing Time:10:00PM</p>
         </div>
         <div className='c2'>
            <img src={f2} alt='' className='ci2' width={110} height={110}/>
            <p className='cp3'>Email:FIXIT@gmail.com</p>
         </div>
         <div className='c3'>
            <img src={f3} alt='' className='ci3' width={110} height={110}/>
            <p className='cp4'>phone:9361254471</p>
         </div>
        </>
    )
}