import { ADD_To_DB } from "./constant"
export const addToDb=(data)=>{
    console.warn('hi from action')
    return {
        type:ADD_To_DB ,
        data 
    }
}