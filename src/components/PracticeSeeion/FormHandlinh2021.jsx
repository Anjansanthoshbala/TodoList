import { useState } from "react"

export function Formhandling12() {
    const [name,setName] = useState("")
    return(<>
       <label>Username:</label>
       <input type="text" placeholder="Enter Placeholder" onChange={() => setName(e.target.value)}/> <br></br>
        </>)
}