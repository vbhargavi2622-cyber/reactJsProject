import './App.css';

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

const SearchComponent = () => {
  return(
    <div className='search'>
      <input type="text" placeholder='Search here...' />
      <button>Search</button>
    </div>
  );
}
const RestaurantCard = () => {
  return (
    <div className='restaurant-card'>
      <img src="./foodLogo.png" alt="Restaurant" />
      <h3>Meghana</h3>
      <p>Bharath Nagar</p>
      <p>Rating: 4.5</p>
    </div>
  );
}

const BodyComponent = () => {
  return (
    <div className='body'>
      <SearchComponent />
      <div className='restaurant-container'>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
}

export default App;
