import { ADD_To_DB } from "./constant"
import axios from 'axios';
export const userData=(data=[],action)=>{
    console.warn('hi from reducer' )
    console.log(action , 'action')
    // if (action.type===ADD_To_DB ){
    //     console.log("sucess")
    //     return 0;
    // }
    // return 0;
    switch(action.type){
        case ADD_To_DB:
            console.log(action.data , 'from reducer')
            axios.post(`http://localhost:5000/users/add`,{username: action.data} )
            return action.data  ;
        default:
            return data;
            //if we return blank array it will remove all the data .
    }
}