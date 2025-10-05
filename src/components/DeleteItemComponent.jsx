const DeleteItemList = ({ itemId, onClose, onDelete }) => {
  return (
    <div className="popup">
      <h4>Delete item {itemId}?</h4>
      <div>
        <button onClick={onClose}>Cancel</button>
        <button
          onClick={() => {
            onDelete(itemId); 
            onClose();        
          }}
        >Ok</button>
      </div>
    </div>
  );
};

export default DeleteItemList;
