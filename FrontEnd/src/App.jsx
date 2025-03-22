import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Booking from './components/Booking';
import Payment from './components/Payment';
import History from './components/History';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Define routes for each component */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Search Page */}
          <Route path="/search" element={<Search />} />

          {/* Booking Page */}
          <Route path="/booking" element={<Booking />} />

          {/* Payment Page */}
          <Route path="/payment" element={<Payment />} />

          {/* Booking History Page */}
          <Route path="/history" element={<History />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Register Page */}
          <Route path="/register" element={<Register />} />

          {/* 404 Page (Optional) */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
