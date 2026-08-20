export function Event1(){
    function clicked(){
        alert("You clicked a button");
    }
    return (<>
    <h1>Event in react</h1>
    <button onClick={clicked}>Click me</button>
    </>)
}
 
export function Event2(){
    function login(){
        alert("Login success");
    }
    return(<>
      <h1>Event 2</h1>
      <button onClick={login}>Log in</button>
    </>)
}
export function Event3(){
    function checked(a,b){
        alert(`Addition of two numbers ${a+b}`);
    }
    return (<>
      <h1>Event handling using arrow function</h1>
      <button onClick={() =>checked(10,20)}>click me</button>
    </>)
} 