import { useState,useEffect } from "react";

const useRestaurantMenu = (resId)=>{
    const [resMenu, setResMenu] = useState(null);

    useEffect(()=>{
        restaurantMenuDetails();
    },[]);

    const restaurantMenuDetails = async () => {
        const data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4699254&lng=78.4311401&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const jsonResMenuApiData = await data.json();
        setResMenu(jsonResMenuApiData.data);
    }
    return resMenu;
}

export default useRestaurantMenu;