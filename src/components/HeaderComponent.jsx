import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
   <div className='header'>
      <div className='logo-container'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfZniVo34CymSZNiiGI6j9CZEU5v28ctENg&s" alt="logo" />
      </div>
      <div className='nav-items'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
   </div>
  );
}

export default HeaderComponent;