import {Link} from 'react-router-dom';

function Footer () {
    return (
        <footer>
            <img src="Little-Lemon-logo-small.jpg" width="202" height="76" alt="Little Lemon Logo"/>
            <div id="footer-nav-links">
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><Link to="./" className="nav-links">Home</Link></li>
                    <li><Link to="./#About" className="nav-links">About</Link></li>
                    <li><Link to="./#Specials" className="nav-links">Menu</Link></li>
                    <li><Link to="./Bookings" className="nav-links">Reservations</Link></li>
                    <li><Link to="./OrderOnline" className="nav-links">Order Online</Link></li>
                    <li><Link to="./Login" className="nav-links">Login</Link></li>
                </ul>
            </div>
            <div id="contact">
                <h4>Contact</h4>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div id="social-media">
                <h4>Social Media Links</h4>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;