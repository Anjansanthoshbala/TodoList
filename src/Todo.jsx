import { useState } from "react"

export function Todolist(){
    const [data,setData]= useState(" ");
    const [details, setDetails] = useState([]);
    const [edit,setEdit] = useState(false)
    const [itemIndex,setIndex] = useState("")
    function add(){
            setDetails([...details,data])
            setData("");
        }
        function delete1(index){
            setDetails(details.filter((_,i) => i != index))
        }
        function edited(index){
            setEdit(true)
            setData(details[index])
            setIndex(index)
        }
        function save(){
            setEdit(false)
            details[itemIndex]=data
            setData("")
        }
     return(<>
       
        <div style={{border:"2px solid black", width:"350px", height:"fit content", padding:"10px",borderRadius:"10px"}}>
            <h1>To do list Application</h1>
            <input type="text" value={data} placeholder="Enter item" onChange={(e) => setData(e.target.value)}/>
            {!edit?<button onClick={()=>add()}>add</button>:
            <button onClick={() => save()}>Save</button>}
            <ul>
                {details.map((d,i)=><li key={i}>{d} <button onClick={() => delete1(i)}>delete</button>
                <button onClick={() => edited(i)}>Edit</button></li>)}
            </ul>
        </div>
     </>)
}