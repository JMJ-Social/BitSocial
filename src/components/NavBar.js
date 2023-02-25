import { NavLink } from "react-router-dom"

const NavBar = ({token}) => {

    return (
        <nav>
            {token ?
            <>
            <NavLink className='nav-link' to='/'>
            Home
            </NavLink>
            <NavLink className='nav-link' to='/messages'>
            Messages
            </NavLink>
            <NavLink className='nav-link' to='/profile'>
            Profile
            </NavLink>
            </>
            :
            <>
            <NavLink className='nav-link' to='/'>
            Home
            </NavLink>
            <NavLink className='nav-link' to='/loginRegister'>
            Login
            </NavLink>
            </>
            }
            
        </nav>
    )
}
export default NavBar;