import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Exercise(){
    const [data , setdata]=useState([])
    const getData=()=>{
         axios.get(`http://localhost:5000/exercise/`).then((res)=>{console.log(res.data)})

    }
    useEffect(()=>{
        getData();
    },[])
    return(<div><div>{data.map((item,index)=>{return(<div>{item.name}</div>)})}</div></div>)
    
}
export default Exercise;