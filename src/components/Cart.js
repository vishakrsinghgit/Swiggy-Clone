import React from "react";
import { useDispatch,useSelector } from "react-redux";
import FoodItem from "./FoodItems";
import {clearCart} from "../utils/cartSlice";
import {IMG_CDN_URL} from "../Constant";



const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
   
    console.log(cartItems);
    const Sum = ()=>{let sum=0;
      cartItems.map((items)=>{
      sum += items.li.price?items.li.price/100:items.li.defaultPrice/100;
      
    })
    return sum;
  }
    console.log(Sum());
   
  return Sum()?(
    <div className="pl-96 pr-96">
        <h1 className= "font-bold text-3xl">Cart Items-{cartItems.length} </h1>
        <button className="bg-green-100 p-2 m-5" onClick={()=>handleClearCart()}>Clear Cart</button>
        <div className=" font-bold text-2xl flex justify-start  border-b-[4px]">
          <h2 className=" ">
          <img className=" p-1 w-32 h-20 rounded-md" src={IMG_CDN_URL + cartItems[0].restaurant.cloudinaryImageId}>
            </img>
            {/* {cartItems[0]?IMG_CDN_URL+cartItems[0].restaurant.cloudinaryImageId:""} */}
          </h2>
          <h2 className="ml-3  pt-5">{cartItems[0]?cartItems[0].restaurant.name:""}</h2>
          

        </div>
       
        <div className="pt-2 ">
        {cartItems.map((item)=>{
         
           return (<div>
           <FoodItem key={item.id} {...item}/></div>
           )
        })}
        </div>

      <div className=" flex justify-between"><h2 className="font-semibold text-lg ">Total</h2> <h2>₹ {Sum()}</h2> </div>
        <div className=" flex justify-between">
          <h2>Delivery Fee</h2>
          <h2>₹ 50</h2>
        </div >
        <div className=" flex justify-between">
          <h2>Platform Fee</h2>
          <h2>₹ 2</h2>
        </div>
        <div className=" flex justify-between">
          <h2>GST and Restaurant Charges</h2>
          <h2>₹ 40</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold">To Pay</h2>
          <h2>₹ {parseFloat(Math.round(Sum()) + 50 + 2 + 40)}</h2>
        </div>
        
    </div>
  ):(<div className=""><h1 className= "font-bold text-3xl">Cart Items-{cartItems.length} </h1>
  <button className="bg-green-100 p-2 m-5" onClick={()=>handleClearCart()}>Clear Cart</button></div>)
}

export default Cart