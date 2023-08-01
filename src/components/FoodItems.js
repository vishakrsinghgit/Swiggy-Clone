import { IMG_CDN_URL } from "../Constant";

const FoodItem = ({imageId,name,description,defaultPrice,price})=>{

    
     
    return(
        <div className="w-56 p-2 m-2 bg-pink-50 rounded-md">
            <img src={IMG_CDN_URL + imageId}>
            </img>
            <h2 className="font-bold text-lg ">{name}</h2>
            <h3>{description}</h3>
            <h4>Rupees: {price?price/100:defaultPrice/100}</h4>
        </div>
    );

};

export default FoodItem;