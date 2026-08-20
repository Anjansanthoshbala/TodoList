import { Link, Outlet } from "react-router-dom"

 export function Menu1(){
    return(<>

    <Link to="viewprofile">Viewprofile</Link>
    <Link to="setting">Setting</Link>
    <Link to="orders">Orders</Link>
    <Link to="cart">Cart</Link>
    <div style={{border:"2px solid black",width:"100%",height:"500px"}}>
     <Outlet/>
    </div>
    </>)
}
export function Viewprofile1(){
   return <h1>View Profile</h1>
}
export function Setting1(){
    return <h1>Settings page</h1>
}
export function Order1(){
    return <h1>Orders Page</h1>
}
export function Cart1(){
   return <h1>Cart Page</h1>
}