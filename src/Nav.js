import {Link} from 'react-router-dom';

function Nav () {
    return (
        <nav id="navbar">
            <img src="Little-Lemon-logo-small.jpg" width="202" height="76" alt="Little Lemon Logo"/>

            <ul className="nav-links">
                <li><Link to="./" className="nav-links">Home</Link></li>
                <li><Link to="./#About" className="nav-links">About</Link></li>
                <li><Link to="./#Specials" className="nav-links">Menu</Link></li>
                <li><Link to="./Reservations" className="nav-links">Reservations</Link></li>
                <li><Link to="./OrderOnline" className="nav-links">Order Online</Link></li>
                <li><Link to="./Login" className="nav-links">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;