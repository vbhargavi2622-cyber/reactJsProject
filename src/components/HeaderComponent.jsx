const HeaderComponent = () => {
  return (
   <div className='header'>
      <div className='logo-container'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfZniVo34CymSZNiiGI6j9CZEU5v28ctENg&s" alt="logo" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
   </div>
  );
}

export default HeaderComponent;