import axios from 'axios';
import React, { Component, useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './css/Booking.css';
import { Card,Button } from '@mui/material';
import f1 from './Images/book2.png';

export const Update=()=>
{
    const {id}=useParams();
    const navigate=useNavigate();
    const [phone,setPhone]=useState({
        bookingid:id,
        username:"",
        phonemodel:"",
        servicetype:"",
        date:"",
    });
    useEffect(()=>{
        const fetchphone=async()=>{
            try{
                axios.get(`http://127.0.0.1:8804/sec/get/${id}`).then((res)=>{
                    setPhone(res.data);
                })
            }
            catch(error){
                console.log(error)

            }
        };
        fetchphone();
    },[]);
    const handleInputChange =(e) =>
    {
        const { name,value}=e.target;
        setPhone({ ...phone,[name]:value})
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        axios.put('http://127.0.0.1:8804/sec/update',phone).then((res)=>{
            if(res.data==="Successfully Updated")
            {
                navigate('/final');
            }
        })
    }
    return(
        <>
        <Card className='cba' elevation={10}>
    <p className='bp'>Online Booking</p>
    <p className='bp1'>Please fill out the information below to Update your reservation </p>
    </Card>
   
   
      <form className="book" onSubmit={handleSubmit}>
          <input
            type='text'
            name='username'
            placeholder="UserName"
            value={phone.username}
            className='b1'
            required
          />
          <br></br><br></br>
          <input
            type='text'
            name='phonemodel'
            placeholder="phoneModel"
            value={phone.phonemodel}
            onChange={handleInputChange}
            className='b1'
            required
          />
              <br></br><br></br>
          <input
            type='text'
            name='servicetype'
            placeholder="ServiceType"
            value={phone.servicetype}
            onChange={handleInputChange}
            className='b1'
            required
          />
              <br></br><br></br>
          <input
            type='text'
            name='date'
            placeholder="Date"
            value={phone.date}
            onChange={handleInputChange}
            className='b1'
            required
          />
              <br></br><br></br>
          <Button  variant='contained'
            style={{ borderRadius: '200px' }} type="submit" className='bub'>Update</Button>
          </form>
          <img src={f1} alt='' width={400} height={400}className='boim'/>
        </>
    )
}