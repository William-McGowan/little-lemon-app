import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import BookingForm from './Bookings/BookingForm';
import { initializeTimes, updateTimes } from './App';

/*let availableTimes = [  { reservationTime: "17:00", isAvailable: true},
        { reservationTime: "18:00", isAvailable: true},
        { reservationTime: "19:00", isAvailable: true},
        { reservationTime: "20:00", isAvailable: true},
        { reservationTime: "21:00", isAvailable: true},
        { reservationTime: "22:00", isAvailable: true}];
*/

let availableTimes = [ "17:00", "18:00", "19:00", "20:00", "21:00", "22:00" ];
let date="06/21/2025";

test('Renders the BookingForm heading', () => {

    render(<BookingForm availableTimes={availableTimes} />);
    const headingElement = screen.getByText("Reserve Your Table");
    expect(headingElement).toBeInTheDocument();
})

test('Verifies the initializeTimes function', () => {
    expect(initializeTimes()).toEqual(availableTimes);
})

test('Verifies the updateTimes function', () => {
    expect(updateTimes(availableTimes, date)).toEqual(availableTimes);
})