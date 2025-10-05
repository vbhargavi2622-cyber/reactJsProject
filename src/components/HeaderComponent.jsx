import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const onlineStatus = useOnlineStatus();
  // Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items); 
  return (
   <div className='header'>
      <div className='logo-container'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfZniVo34CymSZNiiGI6j9CZEU5v28ctENg&s" alt="logo" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart"><b>Cart</b> ({cartItems.length})</Link></li>
          <li>Login</li>
        </ul>
      </div>
   </div>
  );
}

export default HeaderComponent;