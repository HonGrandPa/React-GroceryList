import ListItem from "./ListItem";
const Content = ({itemList, handleClick, handleDelete}) => {

    return (
        <ul className="content">
        {itemList.length ? (
          itemList.map((item) => (
           <ListItem 
           key={item.id}
           item={item}
           handleClick={handleClick}
           handleDelete={handleDelete}
           />
          ))
        ) : (
          <p>None</p>
        )}
      </ul>
    )
}

export default Content;