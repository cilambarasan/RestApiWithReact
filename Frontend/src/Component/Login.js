import React, { useState } from 'react';
import f1 from './Images/lo.png';
import { Card, Button } from '@mui/material';
import './css/Login.css'
import f2 from './Images/1.jpg';
import f3 from './Images/3.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Nav } from './Nav';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://127.0.0.1:8804/validate/${username}/${password}`
      );
      setValidate(response.data);
      if (response.data === true) {
        console.log('Successfully logged in');
        
        // Redirect to the desired route
        navigate('/book');
      } else {
        alert('Invalid Username or Password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card elevation={10} className="card">
        <img src={f1} alt="" width={500} height={600} className="ci" />
        <p className="head">Welcome Back :)</p>
        <p className="bo">
          To keep connected with us please login with your personal
          <br />
          information by email and password🔔
        </p>
        <form className="form">
          <input
            type="text"
            placeholder="Enter UserName"
            value={username}
            onChange={handleUsernameChange}
            className="nam"
            id="name"
            required
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
            className="pass"
            id="pass"
            required
          />
          <br />
          <Link to={'/change'} className="lofo">Change Password</Link>
          <br />
          <Button variant="contained" className="logbu" onClick={handleClick}>
            LOGIN
          </Button>
          <br />
          <br />
          <Link to={'/signup'} className="losi">
            NEW USER
          </Link>
          <br />
          <img src={f2} alt="" width={30} height={30} className="logm" />
          <img src={f3} alt="" width={30} height={30} className="logm1" />
        </form>
      </Card>
    </>
  );
};

export default Login;
