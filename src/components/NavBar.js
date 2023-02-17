import { NavLink } from "react-router-dom"

const NavBar = () => {

    return (
        <nav>
            <NavLink className='nav-link' to='/'>
                Home
            </NavLink>
            <NavLink className='nav-link' to='/messages'>
                Messages
            </NavLink>
            <NavLink className='nav-link' to='/profile'>
                Profile
            </NavLink>
        </nav>
    )
}
export default NavBar;