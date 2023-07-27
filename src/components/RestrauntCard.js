import { IMG_CDN_URL } from "../Constant";
import { useContext } from "react";
import {UserContext} from "../utils/UserContext"
export const RestrauntCard = ({cloudinaryImageId,name,cuisines,sla,user})=>{
    // const {user} = useContext(UserContext);
    
     
    return(
        <div className="w-56 p-2 m-2 bg-pink-50 rounded-md">
            <img src={IMG_CDN_URL + cloudinaryImageId}>
            </img>
            <h2 className="font-bold text-lg ">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{sla.lastMileTravelString}</h4>
            {/* <h4>{user.name}</h4>  */}
            <h5 className="font-bold">{user.name}-{user.email}</h5>
        </div>
    );

};

