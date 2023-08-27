import { IMG_CDN_URL } from "../Constant";
import { useContext } from "react";
import {UserContext} from "../utils/UserContext"
export const RestrauntCard = ({cloudinaryImageId,name,cuisines,sla,user})=>{
    // const {user} = useContext(UserContext);
    
     
    return(
        <div className="w-56 h-96 p-2  mt-2 ml-2 mr-2 mb-11 bg-pink-50 rounded-md  hover:border hover:border-slate-300 hover:drop-shadow-lg">
            <img className="w-56 h-56 rounded-md" src={IMG_CDN_URL + cloudinaryImageId}>
            </img>
            <h2 className="font-bold text-lg ">{(name ==="Kwality Walls Frozen Dessert and Ice Cream Shop")?("Kwality Walls"): name}</h2>
            <h3>{cuisines.slice(0, 4).join(", ")}</h3>
            <h4>{sla.lastMileTravelString}</h4>
            {/* <h4>{user.name}</h4>  */}
            <h5 className="font-bold">{user.name}</h5>
        </div>
    );

};

