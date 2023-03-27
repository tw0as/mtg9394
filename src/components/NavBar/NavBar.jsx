import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <header>
            <h2><a href="#home">Old School MTG</a></h2>
            <nav>
                <a href="#home">About Us</a>
                <a href="#news">Rules</a>
                <a href="#news">Decks to Beat</a>
                <div class="dropdown">
                    <button class="dropbtn">Singles
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Alpha</a>
                        <a href="#">Beta</a>
                        <a href="#">Unlimited</a>
                        <a href="#">Arabian Nights</a>
                        <a href="#">Antiquities</a>
                        <a href="#">Legends</a>
                        <a href="#">The Dark</a>
                    </div>
                </div>
            </nav>
            <CartWidget/>
        </header>
    );
}

export default NavBar;
