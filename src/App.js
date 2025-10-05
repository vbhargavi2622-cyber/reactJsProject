import './App.css';
import {createBrowserRouter ,Outlet} from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import ErrorComponent from './components/ErrorComponent';
import RestaurantMenu from './components/RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import CartComponent from './components/CartComponent';


function RootLayout() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <HeaderComponent />
      <Outlet/>
    </div>
    </Provider>
  );
}
const router = createBrowserRouter([
  {
     path: "/", 
     Component: RootLayout ,
     children:[
      {
        path: "/", 
        Component: BodyComponent 
      },
      {
        path: "/about", 
        Component: AboutComponent 
      },
      {
        path: "/contact", 
        Component: ContactComponent
      },
      {
        path: "/cart", 
        Component: CartComponent
      },
      {
        path: "/restaurantmenu/:resId", 
        Component: RestaurantMenu
      },
     ],
     errorElement:<ErrorComponent/>,
  },
  
]);

export default router;
