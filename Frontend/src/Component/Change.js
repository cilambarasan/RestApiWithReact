import React, { useState } from 'react';
import f1 from './Images/ch2.png';
import './css/forgot.css'
import { useNavigate,Link } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';

export const Change=()=>
{
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const handleNewPasswordChange = (event) => {
    setNewpassword(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.put(
        `http://127.0.0.1:8804/upd/${newpassword}/${username}/${password}`).then(res=>{
          if(res.data==false)
          {
            alert("Incorrect Username/Password");
          }
          else{
            alert("Successfully Updated")
            navigate('/login')
          }
        }

        
        )
  };
    return(
        <>
          <img src={f1} alt='' width={600} height={600} className='forpa'/>
          <p className='fp'>Change Password</p>
          <form className='ff1' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter Username'
            value={username}
            onChange={handleUsernameChange}
            className='old'
            required
          /><br></br><br></br>
          <input
            type='password'
            placeholder='Enter old Password'
            value={password}
            onChange={handlePasswordChange}
            className='old'
            required
          /><br></br><br></br>
          <input
            type='password'
            placeholder='Enter New Password'
            value={newpassword}
            onChange={handleNewPasswordChange}
            className='old'
            required
          /><br></br><br></br><br></br>
          <Button type='submit' variant="contained" className='buf'>Submit</Button>
          </form>
          <Link to={'/forgot'} className='Forg'>Forgot Password ?</Link>
        </>
    )
}