import { useState,useEffect, useContext } from "react";
import { restaurantList } from "../Constant";
import { RestrauntCard } from "./RestrauntCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";



const Body = ()=>{
    const [searchText, setsearchInput] = useState("KFC");
    const [filteredRestaurants,setfilteredRestaurants]= useState([]);
    const [allRestaurants,setallRestaurants] = useState([]);
    const {user,setUser} = useContext(UserContext);
    // console.log(restaurants);
    // empty dependency array => once after render
    // dep array [searchText] => once after initial render + everytime after render (my search text changes)
    useEffect(()=>{
        getRestaurants();
    },[]);
    // if(!allRestaurants){
    //     return null;
    // }

    console.log("render()");

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.52908&lng=88.39158&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json(); 
        console.log(json);
        // setallRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setallRestaurants((json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
        // setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
         setfilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const isOnline = useOnline();
    if(!isOnline){
        return <h1> 🔴 Offline,Please check your internet connection</h1>

    }
    // Conditional rendering
    // if restaurant is empty => shimmer UI
    // if restaurant has data => actual data UI
    

    return (allRestaurants?.length === 0)?<Shimmer/>:(
        <>
        <div className="bg-pink-50 my-4 p-5">
            <input 
            type="text" 
            className="focus:bg-green-100 p-1 m-1 " 
            placeholder="Search" 
            value={searchText} 
            onChange={(e)=>{
                setsearchInput(e.target.value);
            }}
            />
            <button className="p-1.5 ml-2 bg-purple-900 hover:bg-gray-300 rounded-md text-white" onClick={
                ()=>{
                    const data = filterData(searchText,allRestaurants);
                    setfilteredRestaurants(data);
                }
            }>Search</button>
            <input 
            type="text" 
            className="focus:bg-green-100 p-1 m-1 " 
            placeholder="Name" 
            value={user.name} 
            onChange={(e)=>{
                return setUser({
                    ...user,
                    name: e.target.value,
                   
                });
            }}
            />
             <input 
            type="text" 
            className="focus:bg-green-100 p-1 m-1 " 
            placeholder="Email" 
            value={user.email} 
            onChange={(e)=>{
                return setUser({
                    ...user,
                    email: e.target.value,
                   
                });
            }}
            />
        </div>
        
        <div className="flex flex-wrap">
            {
                filteredRestaurants.map((res)=>{
                    return (
                    // <Link to={"/restaurant/"+ res.data.id}  key={res.data.id}>
                    <Link to={"/restaurant/"+ res.info.id}  key={res.info.id}>
                    {/* <RestrauntCard {...res.data} user={user}/> */}
                    <RestrauntCard {...res.info} user={user} />
                    
                    </Link>
                    )
                })
            }
            {/* <RestrauntCard {...restaurantList[0].data}  />
            <RestrauntCard {...restaurantList[1].data} />
            <RestrauntCard {...restaurantList[2].data} />
            <RestrauntCard {...restaurantList[3].data} />
            <RestrauntCard {...restaurantList[4].data} />
            <RestrauntCard {...restaurantList[5].data} /> */}
        </div>
        </>
    );
};

export default Body;