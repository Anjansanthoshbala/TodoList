import { useState } from "react"


export function Conditio1(){
    const [loginstatus,setLogin] = useState(true)
    return (<>
       <h1>terniary operator</h1>
       {
        loginstatus?(<div>
            <h1>welcome user</h1>
            <button>Login</button>
        </div>)
        :(<div>
            <h1>Welcome guest</h1>
            <button>Log Out</button>
        </div>)}
    </>
    )
}
