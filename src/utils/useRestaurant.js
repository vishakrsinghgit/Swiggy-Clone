import {useState,useEffect} from 'react';
import { FETCH_MENU_URL } from '../Constant';

const useRestaurant = (resId)=>{
    // const params = useParams();
    const [restaurant, setRestaurant] = useState(null); 
    // const [restaurantMenu, setRestaurantMenu] = useState(null);

    // Get data from API
    useEffect(()=>{
        getRestaurantMenuData();
    },[]);

    async function getRestaurantMenuData(){
        const data = await fetch(FETCH_MENU_URL+ resId);
        const json = await data.json();
        console.log(json?.data?.cards[0]?.card?.card?.info);
        // const realdata =  json?.data?.cards[0]?.card?.card?.info;
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        // setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        
    }
  
   


    //return restaurant data
    return restaurant;
}


export const useRestaurant1 = (resId)=>{
    //  const params = useParams();
    // const [restaurant, setRestaurant] = useState(null); 
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    //  Get data from API
    useEffect(()=>{
        getRestaurantMenuData();
    },[]);

    async function getRestaurantMenuData(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.52908&lng=88.39158&restaurantId="+ resId);
        const json = await data.json();
        console.log(json?.data?.cards[0]?.card?.card?.info);
        //  const realdata =  json?.data?.cards[0]?.card?.card?.info;
        // setRestaurant(json?.data.cards[0]?.card?.card?.info);
        setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        
    }
  
   


//    return restaurant data
    return restaurantMenu;
}

export default useRestaurant;