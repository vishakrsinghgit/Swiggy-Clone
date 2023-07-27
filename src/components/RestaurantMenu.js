import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { IMG_CDN_URL } from "../Constant";
import Shimmer from "./Shimmer";
import useRestaurant ,{useRestaurant1} from "../utils/useRestaurant";
function RestaurantMenu() {
    // const params = useParams();
    // const [restaurant, setRestaurant] = useState(null); 
    // const [restaurantMenu, setRestaurantMenu] = useState(null);
    
    // useEffect(()=>{
    //     getRestaurantMenuData();
    // },[]);
    

  //  async function getRestaurantMenuData(){
  //       const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.52908&lng=88.39158&restaurantId="+ params.id);
  //       const json = await data.json();
  //       console.log(json?.data?.cards[0]?.card?.card?.info);
        // const realdata =  json?.data?.cards[0]?.card?.card?.info;
  //       setRestaurant(json?.data.cards[0]?.card?.card?.info);
  //       setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        
  //   }
    const params = useParams();
     const restaurant = useRestaurant(params.id);
    const restaurantMenu = useRestaurant1(params.id);
    

    // if(!restaurantMenu && !restaurantMenu){
    //   console.log("initial render");
    //   return <Shimmer/>
    // }
    // console.log(restaurant);

    
  return (!restaurantMenu || !restaurant)? <Shimmer/>: (
    <div className="menu">
    <div>
        <h1>Restaurant id: {params.id}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
    </div>
    <div>
      <h1>Menu</h1>
      <ul>
        {(arr =[],
        Object.values(restaurantMenu).map((item) =>{
          // <li key={item?.id}>{item.name}</li>
          // console.log(item);
          // const arr = [];
         if(item?.card?.card?.itemCards){
          // return <li>{item?.card?.card?.itemCards?.card?.info?.name}</li>
            // let menu = item?.card?.card?.itemCards;
            item?.card?.card?.itemCards.map((menu) => {
              // console.log(menu?.card?.info?.name);
              arr.push(menu?.card?.info?.name);
              // return <li>{menu?.card?.info?.name}</li>
              
              
            })
            // console.log(item?.card?.card?.itemCards[0]?.card?.info?.name);
          }
          
          
        }),arr.map((li,index) =>(<li key={index}>{li}</li>)))}
      </ul>

    </div>
    </div>
  
  )
}

export default RestaurantMenu