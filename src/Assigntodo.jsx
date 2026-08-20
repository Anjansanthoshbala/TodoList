import { useState } from "react"

export function Assigntodo1(){
    const [brand,setBrand] = useState("")
    const [name,setName] = useState("");
    const [battery,setBattery] = useState("");
    const [ram,setRam] = useState("");
    const [mfgyear,setMfgyear] = useState("")
    const [details,setDetails] = useState([])
    function save(){
          if(brand != "" && name != "" && battery != "" &&  ram != "" && mfgyear != ""){
          let data = {Brand:brand,Mobilename:name,Batterystorage:battery,Ram:ram,Mfgyear:mfgyear}
          setDetails([...details,data])
          setBrand("")
          setName("")
          setBattery("")
          setRam("")
          setMfgyear("")
    }
}
    return(<>
      <h1>Mobile Specifications</h1><br></br>
      <label>Brand:</label>
      <input type="text" value={brand} placeholder="Enter mobile Brand" onChange={(e) => setBrand(e.target.value)}/>
      <label>Mobile Name:</label>
      <input type="text" value={name} placeholder="Enter  mobile name" onChange={(e) => setName(e.target.value)}/>
      <label>Battery Storage</label>
      <input type="text" value={battery} placeholder="Enter battery capacity"  onChange={(e) => setBattery(e.target.value)}/>
      <label>Ram:</label>
      <input type="text" value={ram} placeholder="Enter your ram"  onChange={(e) => setRam(e.target.value)}/>
      <label>Mfg Year</label>
      <input type="text" value={mfgyear} placeholder="Enter your mfg year" onChange={(e) => setMfgyear(e.target.value)}/>
      <button onClick={() => save()}>Save</button>
      {details.length != 0 ?
      <table border={1} cellSpacing={0} cellPadding={3} >
        <thead>
            <tr>
                <th>Mobile Brand</th>
                <th>Mobile Name</th>
                <th>Battery Storage</th>
                <th>Ram</th>
                <th>Mfg Year</th>
            </tr>
        </thead>
        <tbody>
              {details.map((d) => <tr>
                <td>{d.Brand}</td>
                <td>{d.Mobilename}</td>
                <td>{d.Batterystorage}</td>
                <td>{d.Ram}</td>
                <td>{d.Mfgyear}</td>
                </tr>)}
        </tbody>
      </table>:<p>Empty data</p> }
    </>)
}