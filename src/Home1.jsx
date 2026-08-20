import { Link, Outlet } from "react-router-dom"

export function Home1(){
    return <h1>Welcome to Home page</h1>
}


export function Gallery(){
    return <h1>Gallery Page</h1>
 }
export function Routing(){
    return <h1>This is Routing</h1>
 }
 export function Santhosh(){
    return <h1>Hello, I ama Anjan Santhosh</h1>
 }
 export function Profile(){
    return (<>
    <h1>This is Profile page</h1>
      <Link to="/settings">Settings</Link>
        <Link to="/viewprofile">viewprofile</Link>   
        <Outlet/>
    </>)
     
 }
 export function Settings(){
    return <h1>Settings Page</h1>
 }
 export function Viewprofile(){
    return <h1>View Profilw</h1>
 }