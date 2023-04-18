import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
                <h2>Arabian Nights</h2>
            </Link>
            <nav>
                <NavLink to={`/Category/white`}>White</NavLink>
                <NavLink to={`/Category/blue`}>Blue</NavLink>
                <NavLink to={`/Category/black`}>Black</NavLink>
            </nav>
            <CartWidget/>
        </header>
    );
}

export default NavBar;
