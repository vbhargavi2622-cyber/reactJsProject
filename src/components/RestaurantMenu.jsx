import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import RestaurantCard from "./RestaurantCard";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    if (!resInfo) {
        return <ShimmerComponent />; // show shimmer until data loads
    }
    
    const {name, avgRatingString, totalRatingsString, costForTwoMessage, areaName} = resInfo.cards[2].card.card.info;
    const resMenuItemCards =
        resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
    
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return(
        <div>
            <h1>Restaurant Menu Details</h1>
            <div>
               <h1>{name}</h1>
                <div className="resMenuCard">
                    <h5>Rating: {avgRatingString} ({totalRatingsString} . {costForTwoMessage})</h5>
                    <p>Outlet: {areaName}</p>
                </div>
                <div className="resMenuDetails">
                    <h3>Restaurant Items</h3>
                    {/* <ul>
                    {resMenuItemCards.map((resmenu) => (
                        <li key={resmenu.card.info.id} className="resItemsList">
                           <div className="resItemsInfo">
                               <h4>Item Name: {resmenu.card.info.name}</h4>
                               <h5>Price : ${(resmenu.card.info.defaultPrice)/100}</h5>
                                <h5>ratings: {resmenu.card.info.ratings.aggregatedRating.rating}</h5>
                                <p>{resmenu.card.info.description}</p>
                            </div> 
                        </li>
                    ))}
                    </ul> */}
                    {categories.map((category, index)=>(
                        <RestaurantCategory 
                            key={index} 
                            data = {category.card.card} 
                            showItems = {index === showIndex ? true : false}
                            setShowIndex = {() => setShowIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )

}

export default RestaurantMenu;