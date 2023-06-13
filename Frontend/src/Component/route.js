import React, { Component } from 'react';
import { Nav } from './Nav';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';


import { About } from './About';
import Login from './Login';
import SignUp from './SignUp';
import { Contact } from './Contactus';
import { Change } from './Change';
import { Forgot } from './forgot';
import { Booking } from './Booking';
import { Final } from './Final';
import { Update } from './Update';

export const Page=()=>
{
    return(
        <>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/change' element={<Change/>}/>
            <Route path='/forgot' element={<Forgot/>}/>
            <Route path='/book' element={<Booking/>}/>
            <Route path='/final' element={<Final/>}/>
            <Route path='/update/:id' element={<Update/>}/>
            

        </Routes>
        </>
    )
}