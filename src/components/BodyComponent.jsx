import { useEffect, useState } from "react";
import React from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import mockData  from "../utils/mockData";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = () => {
 const [listOfRestaurant, setListOfRestaurant] = useState([]);
 const [filterRestaurants, setFilterRestaurants] = useState([]);
 const [resNameSearch, setResNameSearch] = useState("");

 const RestarantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async ()=>{
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4699254&lng=78.4311401&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListOfRestaurant(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilterRestaurants(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }
const onlineStatusVal = useOnlineStatus();
  if(onlineStatusVal === false) {
    return (
      <h1>Please check your internet connection.Your are in offline..</h1>
    )
  }
 if(listOfRestaurant.length === 0){
      return <ShimmerComponent/>;
  }
  return listOfRestaurant.length === 0 ? (<ShimmerComponent/>) : (
    <div className='bodyContainer'>
        <button onClick={() => {
          const filterLogic = listOfRestaurant.filter((res) => {
          return res.info.avgRating > 4;
          });
          setFilterRestaurants(filterLogic);
          }}>Top Rateing Restaurant</button>

      <div className='search'>
        <input type="text" placeholder='Search here...' value={resNameSearch} onChange={(e)=>{
          setResNameSearch(e.target.value)
        }}/>
        <button onClick={() => {
          const filteredResData = listOfRestaurant.filter((res) =>
            res.info.name.toLowerCase().includes(resNameSearch.toLowerCase())
          );
          setFilterRestaurants(filteredResData);
        }}>Search</button>
      </div>

      <div className='restaurant-container'>
          {filterRestaurants?.map((restaurant, index) => (
            <Link 
              to={`/restaurantmenu/${restaurant?.info?.id}`} 
              key={restaurant?.info?.id || index}
            >
              {restaurant?.info?.isOpen ? (
                <RestarantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>

    </div>
  );
}

export default BodyComponent;