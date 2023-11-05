import { useRef } from "react";
const AddItem = ({newItem, setNewItem, handleSubmit}) => {

const inputRef = useRef()

    return (
        <form id="newItem" className="new-item-container" onSubmit={handleSubmit}>
    
        
            <input 
                ref={inputRef}
                autoFocus
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit" onClick={() => inputRef.current.focus()}>
                Add Item
            </button>
        </form>
    )
}


export default AddItem;