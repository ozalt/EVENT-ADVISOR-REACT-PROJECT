import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine, RiUser3Fill } from 'react-icons/ri';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from '../../hooks/useLogout';

const NavBar = ({ color }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const { user } = useAuthContext();
    const { logout } = useLogout();

    const NavColor = {
        color: color,
    };

    const handleClickLogout = () => {
        logout();
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleUserMenuToggle = () => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <div className="navbar" style={NavColor}>
            <div className="navbar-logo">
                <Link to="/">
                    <h1>WellEve</h1>
                </Link>
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
                    <p>
                        <Link to="/">Home</Link>
                    </p>
                    <p>
                        <select
                            className="category-dropdown"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            style={NavColor}
                        >
                            <option value="">Category</option>
                            <option value="Apple">Apple</option>
                            <option value="Yellow">Yellow</option>
                            <option value="Red">Red</option>
                        </select>
                    </p>
                    <p>
                        <Link to="/vendors">Vendors</Link>
                    </p>
                    <p>
                        <Link to="/">How it Work?</Link>
                    </p>
                    <p>
                        <Link to="/blogpage">Blog</Link>
                    </p>
                </div>
            </div>
            {!user && (
                <div className="navbar-sign">
                    <Link to="/login">
                        <button type="button">Sign up</button>
                    </Link>
                </div>
            )}
            {user && (
                <div className="navbar-sign">
                    <Link to="" onClick={handleUserMenuToggle}>
                        <button type="button"><RiUser3Fill /></button>
                    </Link>
                    {toggleMenu && (
                        <div className="user-dropdown">
                            <p>{user.user}</p>
                            <ul>
                                <li><Link to="/Dashboard">Profile</Link></li>
                                <li><Link to="/settings">Settings</Link></li>
                                <div className="line"></div>
                                <li onClick={handleClickLogout}>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            )}

            <div className="navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#0a142f"
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#0a142f"
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu_container-links">
                            <p>
                                <Link to="/">Home</Link>
                            </p>
                            <p>
                                <Link to="/vendors">Vendors</Link>
                            </p>
                            <p>
                                <Link to="/">How it Work?</Link>
                            </p>
                            <p>
                                <Link to="/blog">Blog</Link>
                            </p>
                        </div>
                        <div className="navbar-menu_container-links-sign">
                            <Link to="/login">
                                <button type="button">Sign up</button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
