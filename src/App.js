import './App.css';
import Homepage from './Homepage.js';
import BookingPage from './Bookings/BookingPage.js';
import {Routes, Route} from 'react-router-dom';
import React, { useReducer } from 'react';


let date;
let availableTimes = [];

/*export function initializeTimes() {
      return ([
        { reservationTime: "17:00", isAvailable: true},
        { reservationTime: "18:00", isAvailable: true},
        { reservationTime: "19:00", isAvailable: true},
        { reservationTime: "20:00", isAvailable: true},
        { reservationTime: "21:00", isAvailable: true},
        { reservationTime: "22:00", isAvailable: true}
      ])
}*/

export function initializeTimes() {
  return (["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
}

export function updateTimes(availableTimes, date) {
    const updatedTimes = availableTimes.map(availableTime => {
            //if (availableTime.reservationTime === event.target.value) {
            //    return { ...availableTime, isAvailable: false };
           // }
            return availableTime;
        });
   //     setAvailableTimes(updatedTimes);
    return [...updatedTimes];

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

  const [availableTimes, dispatch] = useReducer(updateTimes, [""], initializeTimes);
  console.log(availableTimes);

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
