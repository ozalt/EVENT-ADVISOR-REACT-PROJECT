import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
// import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const NavBar = ({color}) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const NavColor = {
        color: color,
    };

    // const navigate = useNavigate();

    // const onHomeClick = useCallback(() => {
    //     navigate("/");
    // }, [navigate]);

    // const onVendorClick = useCallback(() => {
    //     navigate("/vendors");
    // }, [navigate]);

    // const onBlogClick = useCallback(() => {
    //     navigate("/vendors");
    // }, [navigate]);

    return (
        <div className='navbar' style={NavColor}>
            <div className="navbar-logo">
                <Link to='/'><h1>WellEve</h1></Link>
                {/* <img src={logo} alt='Well Eve' /> */}
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
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/">Category</Link></p>
                    <p><Link to="/vendors">Vendors</Link></p>
                    <p><Link to="/">How it Work?</Link></p>
                    <p><Link to="/blog">Blog</Link></p>
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
                            <p><Link to="/">Home</Link></p>
                            <p><Link to="/">Category</Link></p>
                            <p><Link to="/vendors">Vendors</Link></p>
                            <p><Link to="/">How it Work?</Link></p>
                            <p><Link to="/blog">Blog</Link></p>
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
