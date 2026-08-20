import { useState } from "react"

export function Assignlogin1(){
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [details,setDetails] = useState("")
    function login(){
        if(name != "" && password != ""){
       let data = {Name:name, Password:password}
       setDetails([...details,data])
       setName("")
       setPassword("")  
    }
}
    return(<>
    
        <h1>Login Form</h1>
        <label>Username:</label>
        <input type="text" value={name} placeholder="Enter your Username"  onChange={(e) => setName(e.target.value)}/><br></br>
        <label>Password</label>
        <input type="password" value={password} placeholder="Enter your password"  onChange={(e) => setPassword(e.target.value)}/><br></br>
        <button onClick={() => login()}>Login</button>
        {details.length != 0 ?
        <table border={1} cellSpacing={0} cellPadding={4}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                
                    {details.map((d) => <tr>
                        <td>{d.Name}</td>
                        <td>{d.Password}</td>
                    </tr>
                        )}
            </tbody>
        </table>:<p>Empty Data</p> }
    </>)
}