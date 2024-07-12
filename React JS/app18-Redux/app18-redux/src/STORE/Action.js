import { CREATE_USER, DELETE_USER, READ_USER } from "./Constant"

export const createuseraction=(username)=>{
    return {
        type:CREATE_USER,
        payload:username
    }
}
export const readuseraction=()=>{
    return{
        type:READ_USER
    }
}
export const updateuseraction=()=>{}

export const deleteuseraction=(user)=>{
    return {
        type:DELETE_USER,
        payload:user
    }
}