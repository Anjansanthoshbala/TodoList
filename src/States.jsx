import { useState } from "react"

export function State1(){
    const [name,setName] = useState('guest')
    const [data,setData] = useState('Welcome')
    return(<>
        <h1>Hello,{name}</h1>
        <button onClick={() => setName('Santhosh')}>Login</button>
        <h1>{data}</h1>
        <button onClick={() => setData('Anjan')}>Change</button>
    </>)
}
 export function Counter(){
    const [count,setCount] = useState(0)
    return(<>
     <h1>Count:{count}</h1>
     <button onClick={() => setCount(count+1)}>+1</button>
     <button onClick={() =>count>1?setCount(count-1): setCount(count)}>-</button>
    </>)
 }
  export function Counter1(){
     const [row,setRow] = useState(0)
     return(<>
        <h1>Count:{row}</h1>
        <button onClick={() => setRow(row+1)}>+1</button>
        <button onClick={() => setRow(row+10)}>+10</button>
        <button onClick={() => setRow(row+100)}>+100</button>
        <button onClick={() => setRow(row+1000)}>+1000</button>
        <button onClick={() => setRow(row+10000)}>+10000</button>
      </>)
  }

  export function Counterno1(){
    const [round,setRound] = useState(0);
    return (<>
       <h1>Count:{round}</h1>
       <button>+1<span>-1</span></button>
    </>)
  }