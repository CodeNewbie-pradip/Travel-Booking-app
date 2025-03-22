import React from 'react';
import Razorpay from 'razorpay';

const Payment = () => {
  const handlePayment = async () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY',
      amount: 5000, // Amount in paise
      currency: 'INR',
      name: 'TravelBook',
      description: 'Booking Payment',
      handler: function(response) {
        alert('Payment Successful!');
        // Redirect to booking history
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <div className="payment">
      <h2>Complete Your Payment</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Payment;