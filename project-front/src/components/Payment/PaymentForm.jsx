// // PaymentForm.js

// import React from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe('your_stripe_publishable_key');

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await axios.post('${BASE_URL}api/v1/payments/process', {
//         client_secret: 'your_client_secret', // Replace with your actual client secret
//         // Other payment data if needed
//       });

//       const paymentIntent = data.paymentIntent;

//       if (stripe && elements) {
//         const result = await stripe.confirmCardPayment(paymentIntent.client_secret, {
//           payment_method: {
//             card: elements.getElement(CardElement),
//             billing_details: {
//               // Billing details if needed
//             },
//           },
//         });

//         if (result.error) {
//           console.error('Payment error:', result.error.message);
//           Swal.fire({
//             title: 'Error',
//             text: result.error.message,
//             icon: 'error',
//             confirmButtonText: 'OK',
//           });
//         } else {
//           console.log('Payment succeeded:', paymentIntent);
//           Swal.fire({
//             title: 'Success',
//             text: 'Payment successful',
//             icon: 'success',
//             confirmButtonText: 'OK',
//           });
//         }
//       }
//     } catch (error) {
//       console.error('Payment error:', error.message);
//       Swal.fire({
//         title: 'Error',
//         text: 'Payment failed. Please try again later.',
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//     }
//   };

//   return (
//     <Elements stripe={stripePromise}>
//       <form onSubmit={handleSubmit}>
//         <CardElement />
//         <button type="submit">Pay Now</button>
//       </form>
//     </Elements>
//   );
// };

// export default PaymentForm;
