import { useState } from "react"

export function Effects1(){
    const [col,setCol] = useState("");
    return (<>
      <h1>Which of the following is create single page application</h1>
      <h2 style={{backgroundColor:col == "html"?"red":"green"}} onClick={() => setCol("html")}>1. Html</h2>
      <h2 style={{backgroundColor:col == "css"?"red":"green"}} onClick={() => setCol("css")} >2. CSS</h2>
      <h2>3. Javascript</h2>
      <h2>4. React</h2>
    </>)
}