import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";
const RestaurantMenu = () =>{
    const [resMenu, setResMenu] = useState(null);
    // const [resMenuItemCards, setResMenuItemCards] = useState([]);
    const {resId} = useParams();
    useEffect(()=>{
        restaurantMenuDetails();
    },[]);

    const restaurantMenuDetails = async () => {
        const data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4699254&lng=78.4311401&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const jsonResMenuApiData = await data.json();
        setResMenu(jsonResMenuApiData.data);
        // setResMenuItemCards(jsonResMenuApiData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        
    }
    if (!resMenu) {
        return <ShimmerComponent />; // show shimmer until data loads
    }
    console.log( resMenu.cards[2].card.card.info)
     const {name, avgRatingString, totalRatingsString, costForTwoMessage, areaName} = resMenu.cards[2].card.card.info;
const resMenuItemCards =
  resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

     

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
                    <ul>
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
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default RestaurantMenu;