import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleBooking = () => {
    if (!startDate || !endDate) {
      alert('Please select both check-in and check-out dates.');
      return;
    }
    if (endDate < startDate) {
      alert('Check-out date cannot be before check-in date.');
      return;
    }
    // Save booking details and redirect to payment
    alert('Proceeding to Payment');
  };

  return (
    <div className="booking">
      <h2>Select Travel Dates</h2>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        placeholderText="Check-in Date"
        minDate={new Date()}
      />
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        placeholderText="Check-out Date"
        minDate={startDate || new Date()}
      />
      <button onClick={handleBooking}>Proceed to Payment</button>
    </div>
  );
};

export default Booking;
