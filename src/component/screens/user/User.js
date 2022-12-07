import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField ,  Button } from '@mui/material';

function User(){
    const[name , setName]=useState()
    const [result , setResult]=useState([])
    const getData=()=>{
      axios.get(`http://localhost:5000/users/`)
        .then((res)=>{console.log(res.data);setResult(res.data) })
        
    }

 useEffect(()=>{getData()},[])

    const handleSubmit=()=>{
        console.log(name)
        axios.post(`http://localhost:5000/users/add`,{username: name} )

    }
    return(
        <div className='user'>
            <div className='user-text'>
                <p>User tab</p>

            </div>
          
            <div>
                <label>User name</label>
            <TextField name='name' value={name} onChange={(e)=>{setName(e.target.value)}}></TextField>
            </div>
            <div>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
            {
                result.map((item )=>{
                    return(<div>{item.name}</div>);
                })
            }
            
        </div>
    );

}
export default User;