import {useState} from "react";
const data = {
    name : "ishan",
    gmail : 'ishanrana@gmail.com',
    password : "123456"
}
export const userAuthHook = () =>{
    let [status, setStatus] = useState("loding");
    let [user, setUser] = useState(null);
    setTimeout(()=>{
        const value = Math.floor(Math.random()*50)
        if (value%2===1){
            setStatus('unauthorize')
            setUser(null)
        }else {
            setStatus('success')
            setUser(data)
        }
    },3000)
    return{
        status : status,
        user : user
    }
}