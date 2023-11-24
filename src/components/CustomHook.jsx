import React from 'react';
import {UseMyHook} from "./HookData.js";
import {userAuthHook} from "./hook/userAuth.js";

const CustomHook = () => {
    // const [count,setCount] = UseMyHook(0)
    let {status,user} = userAuthHook()
    // const incrementValue = () =>{
    //     setCount(count+1)
    // }
    return (
        <div>
            {/*custom hook <br/>*/}
            {/*{count}*/}
            {/*<button onClick={incrementValue} >Increment</button>*/}
            {
                status === "loding" ?
                    (<p>data loding</p>) : (status==="unauthorize") ? ("unauthorize") : (
                      <p>
                          {user.name}
                      </p>
                    )
            }

        </div>
    );
};

export default CustomHook;