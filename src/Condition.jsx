import { useState } from "react";

 
 export function Condition2(){
     const [loginstatus,setLogin] = useState(false)
   let message  ="";
   if(loginstatus){
       message=(<>
          <h1>Welcome to guest</h1>
          <button onClick={()=>setLogin(false)}>Log Out</button>
       </>)
   }  
   else {
    message=(<>
       <h1>Welcome User</h1>
       <button onClick={()=>setLogin(true)}>Log In</button>
    </>)
   }
   return message
}