import { useState } from "react"

export  function Condi1(){
    const [loginstatus,setLogin]= useState(false)
    return(<>
       <h1>Short circuit Operator</h1>
       {loginstatus && <h1>welcome user</h1>}
       {!loginstatus && <h1>welcome guest</h1>}
    </>
    )
}