import { Link } from "react-router-dom";

export function Nav(){
    return(<>
      <nav>
        <Link to="/">Home</Link>
        
        <Link to="/gallery">Gallery</Link>
        <Link to="/routing">Routing</Link>
        <Link to="/santhosh">Santhosh</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </>)
}