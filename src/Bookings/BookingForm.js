import {useState} from 'react';

export default function BookingForm({availableTimes, dispatch}) {
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleResDateChange = (event) => {
        setResDate(event.target.value);
        dispatch({type: event.target.value});
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
            <label htmlFor="resDate">Choose date</label>
            <input type="date" value={resDate} onChange={handleResDateChange} id="resDate" />
            <label htmlFor="resTime">Choose time</label>
            <select value={resTime} onChange={handleResTimeChange} id="resTime ">
                {   console.log(Array.isArray(availableTimes))}
                {  availableTimes.map((availableTime) => (
                    //availableTime.isAvailable &&
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                    ))
                }
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" value={guests} onChange={handleGuestsChange} placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select value={occasion} onChange={handleOccasionChange} id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Reserve Your Table" />
            </form>
        </section>
    )
}