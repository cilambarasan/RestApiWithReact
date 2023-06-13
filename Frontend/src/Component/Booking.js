import React, { useState } from 'react';
import axios from 'axios';
import './css/Booking.css';
import { Card,Button } from '@mui/material';
import f1 from './Images/book2.png';
import { Link } from 'react-router-dom';


export const Booking = () => {
  const [customerid, setCustomerid] = useState('');
  const [phonemodel, setPhonemodel] = useState('');
  const [servicetype, setServicetype] = useState('');
  const [date, setDate] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  const handleCustomerChange = (event) => {
    setCustomerid(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhonemodel(event.target.value);
  };

  const handleServiceChange = (event) => {
    setServicetype(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
     username,
     phonemodel,
     servicetype,
     date
    };
    axios.get(`http://127.0.0.1:8804/check/${username}/${customerid}`).then((con)=>
    {
        if(con.data===true)
        {
            axios.post('http://127.0.0.1:8804/sec/add', data).then((res) => {
                if (res.data === true) {
                  alert("Success");
                }
              });
        }
        else{
            alert("Incorrect CustomerId/Username");
        }
    })
    
      
  };
  const find = (event)=>(
      axios.get(`http://127.0.0.1:8804/id/${name}`).then(res=>
      {
        if(res.data!==1000)
        {
            alert("custid:"+res.data);
        }
        else{
            alert("Incorrect Username");
        }
      })
  );

  return (
    <>
    <Card className='cba' elevation={10}>
    <p className='bp'>Online Booking</p>
    <p className='bp1'>Please fill out the information below to complete your reservation </p>
    </Card>
   
   
      <form className="book" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter CustomerId"
          value={customerid}
          onChange={handleCustomerChange}
          className="b1"
          required
        /><br></br><br></br>
        <input
          type="text"
          placeholder="Enter Name"
          value={username}
          onChange={handleUsernameChange}
          className="b1"
          required
        /><br></br><br></br>
        <input
          type="text"
          placeholder="Enter PhoneModel"
          value={phonemodel}
          onChange={handlePhoneChange}
          className="b1"
          required
        /><br></br><br></br>
        <input
          type="text"
          placeholder="Enter ServiceType"
          value={servicetype}
          onChange={handleServiceChange}
          className="b1"
          required
        /><br></br><br></br>
        <input
          type="text"
          placeholder="Enter DateofBooking"
          value={date}
          onChange={handleDateChange}
          className="b1"
          required
        /><br></br><br></br>
        <Button  variant='contained'
            style={{ borderRadius: '200px' }} type="submit" className='bub'>Submit</Button>
      </form>
      <img src={f1} alt='' width={400} height={400}className='boim'/>
      <div className='divi'>
        <p className='fin'>To find Customer Number </p>
        <input type='text' placeholder='UserName' value={name} onChange={handleNameChange}/><br></br><br></br>
    <button onClick={find}style={{ borderRadius: '200px' }} className='hu'>Submit</button>
      </div>
      <div className='din'>
        <p className='din1'>Click Below to view</p>
      <Link to={'/final'} className='din2'>BookingDetails</Link>
      </div>
      
      
    </>
  );
};
