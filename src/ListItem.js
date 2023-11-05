const ListItem = ({item, handleClick, handleDelete}) => {

    return (
        <li className="item" key={item.id}>
        <input type="checkbox" checked={item.checked} onChange={() => handleClick(item.id)}/>
        <label style={item.checked === true ? {textDecoration: "Line-through"} : null}>{item.item}</label>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </li>
    )
}


export default ListItem;