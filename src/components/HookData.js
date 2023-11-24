import {useState} from "react";

export const UseMyHook = (initialValue) =>{
    const [count, countValue] = useState(initialValue);
    return [count,countValue]
}