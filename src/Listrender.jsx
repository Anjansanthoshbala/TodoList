export function Lsitrender1(){
    const persons = ["Jhon","ravi","ram","Kiran","Santhosh"];
    return(<>
       <h1>List Rendering</h1>
       <div>
            {persons.map((p) => <h2>{p}</h2>)}
       </div>
    </>)
}
export function Listrender2(){
    const person = ["Jhon","Ravi","Ram","Kiran","Santhosh"];
    return( <>
    <h1>List Rendering</h1>
    <ul>
      {
        person.map((d) => <li>{d}</li>)
      }
      </ul>
    </>)
}
 
export function List1(){
    const car = [{name:"bmw",color:"blue",price:250000},
                {name:"swift",color:"white",price:950000},
                 {name:"Scorpio",color:"white",price:2000000}]

    return (<>                                     
       <h2>Name:{car.name}</h2>         
       <h3>Price:{car.price}</h3>     
        <div>                                
            {car.map((c) => (<div>                              
                <h2>car Name: {c.name}</h2>      
                <h2>car Color: {c.color}</h2>    
                <h2>Car Price: {c.price}</h2>    
                </div>))}    
        </div>
        </>)
        

}