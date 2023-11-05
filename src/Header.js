const Header = ({title}) => {

    return (

        <h1 className="title">{title}</h1>
    )
}

Header.defaultProps = {

    title : "Default Title"
    
}
export default Header;