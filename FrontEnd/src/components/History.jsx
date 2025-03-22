import React, { useEffect, useState } from 'react';

function History() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch booking history from API
    // Example:
    // axios.get('/api/bookings').then(res => setBookings(res.data))
  }, []);

  return (
    <div className="history">
      <h2>Your Bookings</h2>
      {bookings.map(booking => (
        <div key={booking.id} className="booking-item">
          <p>Location: {booking.location}</p>
          <p>Dates: {booking.startDate} to {booking.endDate}</p>
          <p>Status: {booking.status}</p>
        </div>
      ))}
    </div>
  );
}

export default History;