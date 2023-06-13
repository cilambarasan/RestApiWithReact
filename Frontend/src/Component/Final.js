import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/final.css'
import { useNavigate } from 'react-router-dom';
import f1 from './Images/logos.png';
import { FormControl,InputLabel,Select,MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const Final = () => {
  const [data, setData] = useState([]);
  const navigate=useNavigate();
  const [page, setPage] = useState('');
  const [search, setSearch] = useState('');
  const [offset, setOffset] =useState('');
  const [sort, setSort] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8804/sec/get');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(()=>{
    handleSearch();
  },[search]);
  useEffect(()=>
  {
    handleSort();
  },[sort])
  useEffect(() => {
    handleClick();
  }, [page,offset]);
  const handleSort=()=>
  {
    try{
      if(sort!=='')
      {
      axios.get(`http://localhost:8804/sortby/${sort}`).then((res)=>
      {
        setData(res.data);
      }).catch(error=>
        {
          console.log(error);
        })
      }
      else{
        fetchData();
      }
    }
    catch(error){
         console.log(error);
    }
  }
  const handleSearch=()=>
  {
    try{
      if(search!=='')
      {
        axios.get(`http://localhost:8804/sort/${search}`).then((res)=>{
          setData(res.data);
        }).catch(error=>
          {
            console.log(error);
          })
            }
            else{
                fetchData();
            }
        }
        catch(error){
            console.log(error);
        }
      };
        

  const handleClick = () => {
    try{
        
        if(page!==''&&offset!=='')
        {
            axios.get(`http://localhost:8804/pagging/${page}/${offset}`).then((res) => {
      setData(res.data);
    }).catch(error=>
      {
        console.log(error);
      })
        }
        else{
            fetchData();
        }
    }
    catch(error){
        console.log(error);
    }
  };
  const deleteid = (bookingid) => {
    axios.delete(`http://127.0.0.1:8804/sec/delete/${bookingid}`)
      .then((response) => {
        
        console.log(`Booking with ID ${bookingid} deleted successfully.`);
      
        fetchData();
      })
      .catch((error) => {
     
        console.log(error);
      });
  };
  const updateid=(id)=>
  {
    navigate(`/update/${id}`);
  }

  return (
    <>
    <br></br>
    <br></br>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>BookingId</th>
            <th>Username</th>
            <th>PhoneModel</th>
            <th>ServiceType</th>
            <th>Date</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.bookingid}</td>
              <td>{item.username}</td>
              <td>{item.phonemodel}</td>
              <td>{item.servicetype}</td>
              <td>{item.date}</td>
              <td>
                <DeleteIcon onClick={() => deleteid(item.bookingid)}/>
              </td>
              <td>
                <EditIcon onClick={()=>updateid(item.bookingid)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          
           <label className='l1'>Pageno:</label>
           <input type='text' value={page} onChange={(e)=>{setPage(e.target.value)}} className='finbo'/><br></br><br></br>
         
           <label className='l2'>Offset:</label>
           <input type='text' value={offset} onChange={(e)=>{setOffset(e.target.value)}}className='finbo1'  /><br></br>
           
        <input class="form-control me-2" className='ser' type='text' value={search} placeholder="Search" 
        onChange={(e)=>{setSearch(e.target.value)}}
        aria-label="Search"/>
   
        <img src={f1} alt='' className='simim' width={30} height={30}/>
        <div className='dropdown1'>
<FormControl className='dropdown' >
  <p className='dropp'> Sort By</p>
  <Select
    labelId="demo-simple-select-autowidth-label"
    id="demo-simple-select"
    value={sort}
    sx={{height:'30px'}}
   
    onChange={(e)=>setSort(e.target.value)}
  >
    <MenuItem value={'username'}>Name</MenuItem>
    <MenuItem value={'phonemodel'}>PhoneModel</MenuItem>
    <MenuItem value={'servicetype'}>ServiceType</MenuItem>
    <MenuItem value={''}>Default</MenuItem>
  </Select>
</FormControl>
</div>
           
    </>
  );
};
