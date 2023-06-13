import React, { Component } from 'react';
import f1 from './Images/about1.jpg';
import f2 from './Images/about2.jpg';
import { Card } from '@mui/material';
import'./css/About.css';
export const About=()=>
{
    return(
        <>
       
          <img src={f1} alt='' width={1500} height={750} className='bac'/>
          <div className='mar'>
            <img src={f2} alt='' width={130} height={130} className='im'/>
            <p className='name'>Mr.Maruthu</p>
            <p className='or'>CEO & Founder</p>

          </div>
          <div className='about'>
            <p className='pa'>
            At Our Phone Service, we understand that communication is at the heart of every<br></br> 
            interaction. Whether you're an individual or a business, having a reliable phone <br></br>
            service is essential to staying connected with your loved ones, colleagues, and<br></br>
            customers. That's why we're dedicated to providing top-notch phone services that<br></br>
             meet your unique needs.
            </p>
          </div>
          <Card className='card3' elevation={10}>
            <p className='who'>  Who We Are:</p>
            <p className='aii'>Our Phone Service is a leading provider of comprehensive telecommunications solutions.
               With years of experience in the industry, we have built a reputation for delivering exceptional 
               phone services to individuals and businesses of all sizes. We take pride in our commitment to reliability,
                affordability, and outstanding customer support.</p>
          </Card>
          <Card className='card4' elevation={10}>
          <p className='who'>  What We Offer:</p>
            <p className='aii'> 
            We offer a wide range of phone services tailored to suit your specific requirements. Whether you're looking for a reliable landline connection,
             a cutting-edge VoIP system, or a flexible mobile plan, we have you covered. Our services include:<br></br>
             1)Landline Phone Service<br></br>
             2)VoIP Solutions<br></br>
             3)Mobile Phone Plans<br></br>
             4)Business Phone Systems<br></br>
            </p>
          </Card>
          <Card className='card5' elevation={10}>
          <p className='who'>  Why Choose Us:</p>
          <p className='aii'> 
          There are several reasons why you should choose Our Phone Service as your trusted telecommunications partner:<br></br>
          1)Reliability<br></br>
          2)Affordability<br></br>
          3)Excellent Customer Support<br></br>
          4)Flexibility
          5)Innovation
          </p>
          </Card>
          
        </>
    )
}