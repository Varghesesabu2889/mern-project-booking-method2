// // components/PaymentGateway.js
// import React, { useState, useEffect } from 'react'; // Added useEffect import
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import PaymentForm from './PaymentForm'; // Assuming PaymentForm is in the same directory
// import { SECRET_KEY } from '../../utlis/config.js'; // Corrected import path

// const stripePromise = loadStripe(SECRET_KEY); // Removed template literal

// const PaymentGateway = ({ totalAmount }) => {
//   const [clientSecret, setClientSecret] = useState('');

//   useEffect(() => { // Changed from useState to useEffect
//     // Simulate fetching the payment intent client secret from your server
//     fetch('${BASE_URL}api/v1/payments/intent', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ amount: totalAmount }),
//     })
//       .then(res => res.json())
//       .then(data => setClientSecret(data.client_secret)); // Assuming the server responds with client_secret
//   }, [totalAmount]);

//   if (!clientSecret) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Elements stripe={stripePromise}>
//       <PaymentForm clientSecret={clientSecret} />
//     </Elements>
//   );
// };

// export default PaymentGateway;
