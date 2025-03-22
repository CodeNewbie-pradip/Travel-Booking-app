import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to Travel Booking</h1>
      <div className='search-box'>
        <Link to="/search">
          <button>Search Travel Options</button>
        </Link>
      </div>
      <div className='auth-buttons'>
        <Link to="/login" aria-label="Login to your account">Login</Link>
        <Link to="/register" aria-label="Create a new account">Register</Link>
      </div>
    </div>
  );
};

export default Home;
