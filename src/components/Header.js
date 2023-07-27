import { useState,useContext } from "react";
import logo from "../assets/img/swiggy.png";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext";
const LoggedInUser =() => {
    //API call to check authentication
    return false;

};

export const Title =() =>{
    
    return(
   
        <img className="h-28 p-2"
         alt= "Swiggy Image" src={logo}>

        </img>
    
    );
};

export const Header= () =>{
    const isOnline = useOnline();
    const [isloggedIn,setIsloggedIn] = useState(false);
    const {user} = useContext(UserContext);
    return(
        <div className="flex justify-between bg-blue-50 sm:bg-pink-50 shadow-lg">
            <Title/>
            <div >
                <ul className="flex py-10">
                    <li ><Link to="/" className="px-2">Home</Link></li>
                    <li ><Link to="/about" className="px-2">About</Link></li>
                    <li><Link to="/contact" className="px-2">Contact</Link></li>
                    <li><Link to="/instamart" className="px-2">Instamart</Link></li>
                    <li>Cart</li>
                </ul>

            </div>
            <h1 className="flex py-10 px-2">{isOnline ? "🟡" : "🔴"}</h1>
            <span className="p-10 font-bold text-red-600">{user.name}</span>
            {
                (isloggedIn ? <button onClick={()=>{setIsloggedIn(false)}}>Logout</button>:<button onClick={()=>{setIsloggedIn(true)}} className="pb-2 pr-2">Login</button>)
            }
            
            
        </div>
    );
};

// export default Title;