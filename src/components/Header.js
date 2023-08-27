import { useState,useContext } from "react";
import logo from "../assets/img/swiggy.png";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import BasicExample from "./LoginForm";
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

export const Header= ({logIn, setlogIn}) =>{
    const isOnline = useOnline();
    const [isloggedIn,setIsloggedIn] = useState(logIn);
    const {user} = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    return(
        <div className="flex justify-between bg-blue-50 sm:bg-pink-50 shadow-lg">
            <Title/>
            <div >
                <ul className="flex py-10">
                    <li ><Link to="/" className="px-2">Home</Link></li>
                    <li ><Link to="/about" className="px-2">About</Link></li>
                    <li><Link to="/contact" className="px-2">Contact</Link></li>
                    <li><Link to="/instamart" className="px-2">Instamart</Link></li>
                    <li><Link to="/cart" className="px-2">Cart-{cartItems.length}-items</Link></li>
                </ul>

            </div>
            <h1 className="flex py-10 px-2">{isOnline ? "🟡" : "🔴"}</h1>
            {/* <span className="p-10 font-bold text-red-600">{user.name}</span> */}
            {
                // (isloggedIn ? <button onClick={()=>{setIsloggedIn(false)}}>Logout</button>:<button onClick={()=>{setIsloggedIn(true)}} className="pb-2 pr-2">Login</button>)
                (isloggedIn ? <button onClick={()=>{setlogIn(false)}}>Logout</button>:<button onClick={()=>{setlogIn(true)}} className="pb-2 pr-2">Login</button>)
                // (isloggedIn ? <button onClick={()=>{}}>Logout</button>:<button onClick={()=>{setIsloggedIn(true)}} className="pb-2 pr-2">Login</button>)
            }
            
            
        </div>
    );
};

// export default Title;