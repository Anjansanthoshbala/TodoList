import { useState } from "react"

export function Forms1(){
    const [user,setName] = useState(" ");
    const [phone,setPhoneno] = useState(" ");
    const [email,setEmail] = useState(" ");
    const [submits,setSubmit] = useState(false)
    const submitted = (e) =>{
        e.preventDefault();
        setSubmit(true)
    }
    return (<>
    <form onSubmit={(e) =>submitted(e)}>
        <label>username:</label>
        <input type="text" placeholder="Enter username" onChange={(e)=>setName(e.target.value)}/>
        <input type="number" placeholder="Enter Phone Number" onChange={(e) => setPhoneno(e.target.value)}/>
        <label>Email</label>
        <input type="email" placeholder="Enter Emial" onChange={(e) => setEmail(e.target.value)} />
        <button>Submit</button>
    </form>
        {submits && (<div>
            <h1>Hello,{user}</h1>
            <h1>phoneno:{phone}</h1>
            <h1>Email:{email}</h1>
            </div>)}
    </>)
}