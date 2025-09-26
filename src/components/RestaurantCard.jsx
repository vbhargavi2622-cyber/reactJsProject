const RestaurantCard = (props) => {
    const { name, areaName, avgRating, cloudinaryImageId } = props?.resData?.info || {};
  return (
    <div className='restaurant-card'>
        <img 
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} 
        alt="foodLogo" 
        />
        <h3>{name}</h3>
        <p>{areaName}</p>
        <p>Rating: {avgRating}</p>
    </div>
  );
}

export default RestaurantCard;