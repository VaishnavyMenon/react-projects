import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar container">
        <img src = '\images\brand_logo.png' alt='logo'/>
        <ul>
            <li href='#'>MENU</li>
            <li href='#'>LOCATION</li>
            <li href='#'>ABOUT</li>
            <li href='#'>CONTACT</li>
        </ul>
        <button>Login</button>
        </div> 
    )
}

export default Navbar;