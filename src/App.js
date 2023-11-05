import Header from "./Header";
import Content from "./Context";
import AddItem from "./AddItem"
import Search from "./Search";
import { useState } from "react";

const App = () => {
  const title = "Grocery List";
  const [itemList, setItemList] = useState(JSON.parse(localStorage.getItem("shoppingList")));

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  const saveAndStore = (item) => {

    setItemList(item);
    localStorage.setItem("shoppingList", JSON.stringify(item))

  }


  const addItem = (item) => {

    const id = itemList.length ? itemList[itemList.length -1].id + 1:1
    const newItem = {id, checked:false, item};
    const newList = [...itemList, newItem];
    saveAndStore(newList);
    
  }

  const handleClick = (id) => {
    const checkItem = itemList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    saveAndStore(checkItem);
  };

  const handleDelete = (id) => {

    const deletedItem = itemList.filter(item => item.id !== id);
    saveAndStore(deletedItem);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem("");
  }

  return (
    <div className="container">
      <Header title={title} />
      <Search 
        search={search}
        setSearch={setSearch}
      />
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <Content 
      itemList={itemList.filter((item) => (item.item.toLowerCase()).includes(search.toLowerCase()))}
      handleClick={handleClick}
      handleDelete={handleDelete}
      />
      
    </div>
  );
};

export default App;
