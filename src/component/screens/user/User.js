import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField ,  Button } from '@mui/material';
import './styless.css';
import { addToDb } from '../../../redux/action';
import { useDispatch , useSelector } from 'react-redux';


function User(){
  const res=useSelector((state)=>state) // to get data from store we use useSelector and its a redux state
  console.log(res , 'res from store')
    const dispatch = useDispatch();
    const[name , setName]=useState()
    const [result , setResult]=useState([])
    const getData=()=>{
      axios.get(`http://localhost:5000/users/`)
        .then((res)=>{console.log(res.data);setResult(res.data) })
        
    }

 useEffect(()=>{getData()},[])

    // const handleSubmit=()=>{
    //     console.log(name)
    //     axios.post(`http://localhost:5000/users/add`,{username: name} )

    // }
    return(
        <div className='user'>
            <div className='user-text'>
                <p className='title'>User Tab</p>

            </div>
          
            <div className='text'>
                <label className='label' >User Name</label>
            <TextField size='small' name='name' value={name} onChange={(e)=>{setName(e.target.value)}}></TextField>
            </div>
            <div className='text'>
                <Button className='button' onClick={()=>{dispatch(addToDb(name))}}>Submit</Button>
            </div>
            {/* <div className='text'>
                <Button className='button' onClick={()=>{dispatch(addToDb(name))}}>hi redux</Button>
            </div> */}
           
            
        </div>
    );

}
export default User;