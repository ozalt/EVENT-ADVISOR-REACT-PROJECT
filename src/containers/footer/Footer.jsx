import React from 'react';
import './footer.css';
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import snapchat from '../../assets/snapchat.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-about">
                <div className="footer-logo-moto">
                    <h1>Well Eve - <span>Event Advisor at your palm</span>.</h1>
                    <p>Plan your Event without leaving your couch.</p>
                </div>
                <div className="footer-detail">
                    WELL EVE is an Pakistani Event/Wedding advisor Website and app where you can find the best wedding vendors, with prices and
                    reviews at the click of a button. Whether you are looking to hire wedding planners in Pakistan, or looking for the top photographers,
                    or just some ideas and inspiration for your wedding. WELL EVE can help you solve your wedding planning woes through its
                    unique features. With a checklist, detailed vendor list, inspiration gallery and blog - you won't need to spend hours planning a wedding
                    anymore.
                </div>
                <div className="footer-about-contact">
                    <div className="contact-detail">
                        <div className="contact-email">
                            <h1>Contact us to get best deals </h1>
                            <p>vendor@example.com | info@example.com <br />+92 310 5555869</p>
                        </div>
                        <h1>Get Latest Blog Alerts</h1>
                        <form action="" method="post">
                            <input type="text" placeholder='Email' />
                            <button type="submit">Submit</button>
                        </form>
                        <div className="footer-contact-btn">
                            <button className='weding'>Submit Wedding</button>
                            <button className='vendor'>Register Vendor</button>
                        </div>
                    </div>
                    <div className="contact-follow">
                        <h1>Follow Us On:</h1>
                        <div className="follow-icon">
                            <img src={facebook} alt="" />
                            Facebook
                        </div>
                        <div className="follow-icon">
                            <img src={instagram} alt="" />
                            Instagram
                        </div>
                        <div className="follow-icon">
                            <img src={snapchat} alt="" />
                            Snapchat
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-menu">
                <div className="footer-menu-lists">
                    <div className="footer-menu-list">
                        <div className="footer-menu-tool">
                            <h1>Start plannig</h1>
                            <ul>
                                <li>Calculator</li>
                                <li>Guest List</li>
                                <li>Seating Chart</li>
                            </ul>
                        </div>
                        <div className="footer-menu-tool">
                            <h1>Explore Galley</h1>
                            <ul>
                                <li>Wdding Idea</li>
                                <li>Stage Theme</li>
                                <li>Blog</li>
                                <li>Dresses Ideas</li>
                                <li>Accessories</li>
                                <li>Groom Wear</li>
                            </ul>
                        </div>
                        <div className="footer-menu-tool">
                            <h1>Legal</h1>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>General Information</li>
                                <li>Terms of Services</li>
                                <li>Become out Patron</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="footer-divider"></hr>
                    <div className="footer-last-copyright">
                        <h1>WELL EVE</h1>
                        <p>Copyright © 2021 - Designed by  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
