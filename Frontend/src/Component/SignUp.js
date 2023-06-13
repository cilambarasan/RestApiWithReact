import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import f1 from './Images/signup.png';
import f2 from './Images/puppy.gif';
import './css/Signup.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    

    const data = {
      email,
      password,
      username,
      phoneNumber,
      address,
    };
    axios.post('http://127.0.0.1:8804/add', data).then((res) => {
      if (res.data === true) {
        navigate('/login');
      }
    });
  };

  return (
    <>
      <Card className='card1' elevation={20}>
        <img src={f1} alt='' width={600} height={600} className='signim' />
        <p className='headsi'>Welcome To Family</p>
        <form className='form1' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter Username'
            value={username}
            onChange={handleUsernameChange}
            className='sina'
            required
          />
          <br />
          <br />
          <input
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={handleEmailChange}
            className='siem'
            required
          />
          <br />
          <br />
          <input
            type='tel'
            placeholder='Enter PhoneNumber'
            value={phoneNumber}
            onChange={handleNumberChange}
            className='sipa'
            required
          />
          <br />
          <br />
          <input
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={handlePasswordChange}
            className='sipa'
            required
          />
          <br />
          <br />
          <textarea
            placeholder='Enter Address'
            value={address}
            onChange={handleAddressChange}
            className='siad'
            required
          />
          <br />
          <br />
          <button
            type='submit'
            variant='contained'
            style={{ borderRadius: '200px' }}
            className='sigbut'
          >
            Signup
          </button>
          <br />
          <br />
        </form>
        <img src={f2} alt='' width={60} height={60} className='gif' />
        <img src={f2} alt='' width={60} height={60} className='gif1' />
      </Card>
      <ToastContainer />
    </>
  );
};

export default SignUp;
