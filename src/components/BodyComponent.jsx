import { useEffect, useState } from "react";
import React from "react";
import SearchComponent from "./SearchComponent";
import RestaurantCard from "./RestaurantCard";
// import mockData  from "../utils/mockData";
import ShimmerComponent from "./ShimmerComponent";
const BodyComponent = () => {
 const [listOfRestaurant, setListOfRestaurant] = useState([]);
  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async ()=>{
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4699254&lng=78.4311401&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListOfRestaurant(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }

 if(listOfRestaurant.length === 0){
      return <ShimmerComponent/>;
}
  return (
    <div className='bodyContainer'>
        <button onClick={() => {
            const filteredData= listOfRestaurant.filter((res) => res?.data?.avgRating > 4)
            setListOfRestaurant(filteredData);
        }}>Top Rateing Restaurant</button>
      <SearchComponent />
      <div className='restaurant-container'>
        {listOfRestaurant?.map((restaurant, index) => (
        <RestaurantCard key={restaurant?.data?.id || index} resData={restaurant} />
        ))}
        
      </div>
    </div>
  );
}

export default BodyComponent;