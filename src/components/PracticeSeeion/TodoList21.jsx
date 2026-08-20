import { useState } from "react"

export function Todolist22(){
   const [data,setData] = useState("")
    const [details,setDetails] = useState([]);
    function add(){
      setDetails([...details,data])    
    }
    return (<>
       <div style={{border:"2px solid black", width:"300px", height:"fit Content", padding:"10px", borderRadius:"20px"}}>
        <h1>To do List</h1>
        <input type="text" value={data} placeholder="Enter Item" onChange={(e) => setData(e.target.value)}/>
        <button onClick={() => add()}>Add</button>
        <ul>
            {details.map((d) => <li>{d}</li>)}
        </ul>
       </div>    
    </>)
}
    
export function Todolist23(){                              
  const [date,setDate] = useState("");                 
  const [detail,setDetail] = useState([]);                 
   
      function add(){
            setDetail([...detail,date])
            setDate("")
      }                               
  return (<>                                                   
        <div style={{border:"2px solid black", width:"300px", height:"fit content", padding:"10px", borderRadius:"20px"}}> 
          <h1>To do List</h1>                                        
          <input type="text" value={date} placeholder="Enter Item" onChange={(e) => setDate(e.target.value)}/>
          <button onClick={() => add()}>Add</button>   
          <ul>
              {detail.map((c) => <li>{c}</li>)}
            </ul>                                                                                           
        </div>                           
     </>)
}
export function Todolist24(){
   const [movie,setMovie] = useState("");
   const [movielist,setMovielist] = useState([]);
      function add(){
        setMovielist([...movielist,movie])
        setMovie("")
      }
   return(<>
        <h1>Hello, I am Anjan Santhosh</h1>
        <input type="text" value={movie} placeholder="Enter movie name" onChange={(e) => setMovie(e.target.value)}/> 
         {/* now input box lo vunnadi access chesukovali eppudu oka state create chesukovali. */}
        <button onClick={() => add()}>Add movie</button>
        <ol>
            {movielist.map((m) => <li>{m}</li>)}
        </ol>
     </>)
}     
  export function Todolist25(){
    const [name,setName] = useState("");
    const [marks,setMarks] = useState("");
    const [details,setDetails] = useState([]);
    function save(){
      if(name != "" && marks != ""){
      let data = {Name:name,Marks:marks};
      setDetails([...details,data]);
      setMarks("");
      setName("");
    }
  }
    return (<>
      <h1>Student Details</h1>
      <label>Name:</label>
      <input type="text" value={name} placeholder="Enter Your name"  onChange={(e) => setName(e.target.value)}/>
      <label>Marks:</label>
      <input type="text" value={marks}  placeholder="Enter your marks" onChange={(e) => setMarks(e.target.value)}/>
      <button onClick={() => save()}>Save</button>
      {details.length !=0 ?
       <table border={1} cellSpacing={0} cellPadding={3}>
            <thead>
              <tr>
              <th>Name</th>
              <th>Marks</th>
              </tr>
            </thead>
            <tbody>
                   {details.map((n) => (<tr>
                      <td>{n.Name}</td>
                      <td>{n.Marks}</td>
                    </tr>
                   ))}
            </tbody>
       </table>:<p>Empty data</p>}
    </>)
  }
                                                                                                                    