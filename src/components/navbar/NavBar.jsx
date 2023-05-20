import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <img src={logo} alt='Well Eve' />
                <div className="navbar-search">
                    <form action="" method="post">
                        <input
                            className="nav-search"
                            type="text"
                            placeholder="What Are you looking for?"
                        />
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </form>
                </div>
            </div>
            <div className="navbar-links">
                <div className="navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt3">Category</a></p>
                    <p><a href="#possibility">Vendors</a></p>
                    <p><a href="#features">How it Works?</a></p>
                    <p><a href="#blog">Blogs</a></p>
                </div>
            </div>
            <div className="navbar-sign">
                <button type="button">Sign up</button>
            </div>

            <div className="navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wgpt3">Category</a></p>
                            <p><a href="#possibility">Vendors</a></p>
                            <p><a href="#features">How it Works?</a></p>
                            <p><a href="#blog">Blogs</a></p>
                        </div>
                        <div className="navbar-menu_container-links-sign">
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default NavBar
