import { useState ,useEffect} from "react";
import DeleteItemList from "./DeleteItemComponent";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = (props) =>{
    const [menuItems, setMenuItems] = useState(props.items);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const deleteItemFromMenu = (itemId) => {
        const updateItems = menuItems.filter((item)=>(item.card.info.id !== itemId));
        setMenuItems(updateItems);
    }

    const dispatch = useDispatch();
    const handleItemAdd = (item) => {
        // Dispatch an action 
        dispatch(addItem(item))
    }

    useEffect(() => {
  setMenuItems(props.items);
}, [props.items]);

return (
  <>
    {menuItems.length > 0 ? (
      menuItems.map((item, index) => (
        <div className="item-card" key={index}>
          <button
            onClick={() => {
              setSelectedItem(item.card.info.id);
              setShowPopup(true);
            }}
          >
            Delete
          </button>

          {showPopup && selectedItem === item.card.info.id && (
            <DeleteItemList
              itemId={item.card.info.id}
              onClose={() => setShowPopup(false)}
              onDelete={() => deleteItemFromMenu(item.card.info.id)}
            />
          )}

          <div className="item-text">
            <div>Item Name: {item.card.info.name}</div>
            <div>
              Price: ₹
              {item.card.info?.price / 100 ||
                item.card.info?.defaultPrice / 100}
            </div>
            <div>Category: {item.card.info.category}</div>
          </div>

          <div>
            <button onClick={() => handleItemAdd(item)}>Add +</button>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`}
              alt="itemLogo"
              className="item-image"
            />
          </div>
        </div>
      ))
    ) : (
      <h3>No items found</h3>
    )}
  </>
);


}

export default ItemList;