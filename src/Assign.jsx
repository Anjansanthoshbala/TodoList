import { useState } from "react";

export function Assign1(){
    const [fname,setFirstName] = useState("");
    const [lname,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [submits,setSubmit] = useState(false);
    const submitted = (e) => {
        e.preventDefault()
        setSubmit(true);
    }
    return (<>
    <form onSubmit={(e) => submitted(e)}>
        <label>First Name</label>
        <input type="text" placeholder="Enter First name" onChange={(e) => setFirstName(e.target.value)}/>
        <labe>Last Name</labe>
        <input type="text" placeholder="Enter Last Name" onChange={(e) => setLastName(e.target.value)} />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        <label>Phone Number</label>
        <input type="number" placeholder="Enter your phone number" onChange={(e) => setPhonenumber(e.target.value)}/>
        <button>Submit</button>
    </form>
    {submits && (<table border={1} cellSpacing={"0px"}>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone Number</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>{fname}</td>
            <td>{lname}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{phonenumber}</td>
        </tr>
        </tbody>
      </table>)} 
      
    </>)
}