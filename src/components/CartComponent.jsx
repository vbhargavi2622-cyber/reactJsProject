import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const CartComponent = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)
    const dispatch = useDispatch();
    const clearCartItem = () =>{
        dispatch(clearCart())
    }
    return(
        <div>
            <h1>Cart</h1>
            <div>
                <button onClick={clearCartItem}>Clear Cart</button>
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default CartComponent;