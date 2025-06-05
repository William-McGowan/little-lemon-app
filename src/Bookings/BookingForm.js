import React, { useState } from 'react';

export default function BookingForm() {
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [availableTimes, setAvailableTimes] = useState([
        { reservationTime: "17:00", isAvailable: true },
        { reservationTime: "18:00", isAvailable: true },
        { reservationTime: "19:00", isAvailable: true },
        { reservationTime: "20:00", isAvailable: false },
        { reservationTime: "21:00", isAvailable: true },
        { reservationTime: "22:00", isAvailable: true }
    ]);

    const handleResDateChange = (event) => {
        setResDate(event.target.value);
    };

    const handleResTimeChange = (event) => {
        setResTime(event.target.value);
    };

    const handleGuestsChange = (event) => {
        setGuests(event.target.value);
    };

    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
    };

    return (
        <section>
            <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} >
            <label for="resDate">Choose date</label>
            <input type="date" value={resDate} onChange={handleResDateChange} id="resDate" />
            <label for="resTime">Choose time</label>
            <select value={resTime} onChange={handleResTimeChange} id="resTime ">
                {availableTimes.map((availableTime) => (
                    availableTime.isAvailable &&
                    <option key={availableTime.reservationTime} value={availableTime.reservationTime}>
                        {availableTime.reservationTime}
                    </option>
                ))
            }
                {/**<option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option> **/}
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" value={guests} onChange={handleGuestsChange} placeholder="1" min="1" max="10" id="guests" />
            <label for="occasion">Occasion</label>
            <select value={occasion} onChange={handleOccasionChange} id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
            </form>
        </section>
    )
}