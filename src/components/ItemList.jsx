import { useState } from "react";
import DeleteItemList from "./DeleteItemComponent";
const ItemList = (props) =>{
    const [menuItems, setMenuItems] = useState(props.items);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const deleteItemFromMenu = (itemId) => {
        const updateItems = menuItems.filter((item)=>(item.card.info.id !== itemId));
        setMenuItems(updateItems);
    }
    return(
        menuItems.map((item) => (
            <div className="item-card">
                <button onClick={() => {
                    setSelectedItem(item.card.info.id);
                    setShowPopup(true);
                }}>Delete</button>
                {/* <DeleteItemList itemId ={item.card.info.id} /> */}
                  {showPopup && (
                        <DeleteItemList
                        itemId={item.card.info.id}
                        onClose={() => setShowPopup(false)}
                        onDelete={deleteItemFromMenu}
                        />
                    )}
                <div className="item-text">
                    <div>ItemName: {item.card.info.name}</div>
                    <div>Price: ₹{item.card.info?.price/100 || item.card.info?.defaultPrice / 100}</div>
                    <div>Category: {item.card.info.category}</div>
                </div>
                <img 
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`} 
                    alt="itemLogo" 
                    className="item-image"
                />
            </div>
          
        ))
        
    )

}

export default ItemList;