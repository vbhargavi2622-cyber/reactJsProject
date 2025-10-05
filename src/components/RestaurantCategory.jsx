import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
    setIsOpen(!isOpen);
    props.setShowIndex();
  };
    return(
        // {accordion Header}
        <div className="accordian_Block">
            <div className="accordion_header" onClick={toggleAccordion}>
                <span>{props.data.title} ({props.data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {isOpen && (<div className="accordion_body">
                {props.showItems && <ItemList items={props.data.itemCards}/> }
            </div>)}
        </div>
        
    )

}

export default RestaurantCategory;