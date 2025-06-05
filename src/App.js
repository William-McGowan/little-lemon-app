import './App.css';
import Homepage from './Homepage.js';
import BookingPage from './Bookings/BookingPage.js';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Bookings" element={<BookingPage/>} />
      </Routes>
    </>
  );
}

export default App;
