import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Hero from './Hero.js';
import Specials from './Specials.js';
import Testimonials from './Testimonials.js';
import About from './About.js';

export default function Homepage () {
    return (
        <>
            <Header />
            <Nav />
            <Hero />
            <Specials />
            <Testimonials />
            <About />
            <Footer />
        </>
    )
}