import { IMG_CDN_URL } from "../Constant";
import { useState,useEffect } from "react";

const FoodItem = ({li,restaurant})=>{
//{imageId,name,description,defaultPrice,price}
 
    return(
        <div className=" flex justify-between">
            {/* <img src={IMG_CDN_URL + imageId}> */}
            {/* </img> */}
            {/* <h3>{restaurant.name}</h3> */}
            <h2 className="">{li.name}</h2>
            {/* <h3>{li.description}</h3> */}

            <h4>₹ {li.price?li.price/100:li.defaultPrice/100}</h4>
        </div>
    );

};

export default FoodItem;