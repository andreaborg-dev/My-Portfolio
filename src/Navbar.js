import { Link } from "react-router-dom";
import './App.css'

export function Navbar(){
    return (
   <>
   <div className="navbuttons">
        <Link to="/">
        <button>Home</button>
        </Link>

        <Link to="/about">
        <button>About Me</button>
        </Link>

        <Link to="/contact">
        <button>Contact</button>
        </Link>

        <Link to="/blog">
        <button>Blog</button>
        </Link>
        
        <Link to="/now">
        <button>Now</button>
        </Link>
        </div>
    </>
    );
}