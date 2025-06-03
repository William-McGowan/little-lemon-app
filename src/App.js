import './App.css';
import Homepage from './Homepage.js';
import Reservations from './Reservations/Reservation.js';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Reservations" element={<Reservations/>} />
      </Routes>
    </>
  );
}

export default App;
