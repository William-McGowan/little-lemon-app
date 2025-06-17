import './App.css';
import Homepage from './Homepage.js';
import BookingPage from './Bookings/BookingPage.js';
import {Routes, Route} from 'react-router-dom';
import React, { useReducer } from 'react';


let date;
let availableTimes;

function initializeTimes() {
      return ([
        { reservationTime: "17:00", isAvailable: true},
        { reservationTime: "18:00", isAvailable: true},
        { reservationTime: "19:00", isAvailable: true},
        { reservationTime: "20:00", isAvailable: true},
        { reservationTime: "21:00", isAvailable: true},
        { reservationTime: "22:00", isAvailable: true}
      ])
}

  function updateTimes(availableTimes, date) {
    const updatedTimes = availableTimes.map(availableTime => {
            //if (availableTime.reservationTime === event.target.value) {
            //    return { ...availableTime, isAvailable: false };
           // }
            return availableTime;
        });
   //     setAvailableTimes(updatedTimes);
    return [...availableTimes];

  }

 // function initializeTimes() {
 //   const initialTimes = availableTimes.map(availableTime => {
 //     return {...availableTime, isAvailable: true};
 //   })
 // }

//const reducer = (state, updateTimes) => {
//    const availableTimes = initializeTimes();
//    return updateTimes(date, availableTimes);
//}

function App() {

 // const [availableTimes, setAvailableTimes] = useState([
 //         { reservationTime: "17:00", isAvailable: true},
 //         { reservationTime: "18:00", isAvailable: true},
 //         { reservationTime: "19:00", isAvailable: true},
 //         { reservationTime: "20:00", isAvailable: true},
 //         { reservationTime: "21:00", isAvailable: true},
 //         { reservationTime: "22:00", isAvailable: true}
 // ]);

  const [availableTimes, dispatch] = useReducer(updateTimes, [{reservationTime: "0:00", isAvailable: true}], initializeTimes);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Bookings" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>} />
      </Routes>
    </>
  );
}

export default App;
