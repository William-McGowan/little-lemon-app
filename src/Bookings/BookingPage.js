import BookingForm from './BookingForm.js';
import Nav from '../Nav.js';

export default function BookingPage (props) {
    return (
        <>
            <Nav />
            <BookingForm {...props}/>
        </>
    )
}