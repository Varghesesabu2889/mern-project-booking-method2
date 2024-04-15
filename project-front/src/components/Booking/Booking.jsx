// import React, { useContext, useState } from 'react';
// import './booking.css';
// import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
// import TextField from '@mui/material/TextField';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Swal from 'sweetalert2';
// import { AuthContext } from '../../context/AuthContext';
// import { BASE_URL } from '../../utlis/config';

// const Booking = ({ tour }) => {
//   const { price } = tour;
//   const { user, dispatch } = useContext(AuthContext);

//   const [booking, setBooking] = useState({
//     userId: user && user._id,
//     userEmail: user && user.email,
//     tourName: '', 
//     fullName: "",
//     phone: "",
//     guestSize: 1,
//     bookAt: `${new Date()}`, 
//   });

//   const [errors, setErrors] = useState({
//     fullName: false,
//     phone: false,
//     bookAt: false,
//     guestSize: false,
//     tourName:false
//   });

//   const handleChange = e => {
//     if (!user) return; 
//     const { id, value } = e.target;
//     setBooking(prev => ({ ...prev, [id]: value }));
//     setErrors(prev => ({ ...prev, [id]: value.trim() === '' }));
//   };

//   const handleDateChange = date => {
//     setBooking(prev => ({ ...prev, bookAt: date }));
//     setErrors(prev => ({ ...prev, bookAt: !date }));
//   };

//   const calculateCharges = () => {
//     const originalAmount = price || 0;
//     const noOfGuests = parseInt(booking.guestSize) >= 0 ? parseInt(booking.guestSize) : 0;
//     const amount = originalAmount * noOfGuests || 0;
//     const gst = amount > 0 ? Math.ceil(amount * 0.18) : 0;
//     const serviceCharge = amount > 0 ? calculateServiceCharge(amount) : 0;
//     const total = amount + gst + serviceCharge || 0;
//     return { amount, serviceCharge, gst, total };
//   };

//   const calculateServiceCharge = amt => {
//     return Math.min(Math.max(amt * 0.05, 0.10));
//   };

//   const handleBooking = async e => {
//     e.preventDefault();
//     try {
//       if (!user) {
//         showLoginAlert();
//         return;
//       }
//       const token = localStorage.getItem('accessToken');
//       if (!token) {
//         // Token is not available, possibly expired
//         showLoginAlert();
//         return;
//       }

//       const res = await fetch(`${BASE_URL}/booking`, {
//         method: 'POST',
//         headers:{
//           "Content-Type":"application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//         credentials:'include',
//         body:JSON.stringify(booking)
//       });
//       const result = await res.json();
//       if (!res.ok) {
//         // Check if response indicates token expiration
//         if (res.status === 401) {
//           // Token expired, logout user
//           localStorage.removeItem('accessToken');
//           dispatch({ type: 'LOGOUT' });
//           showLoginAlert();
//         } else {
//           throw new Error(result.message || 'Booking failed');
//         }
//       }
//       showAlert();
//     } catch (err) {
//       showErrorAlert();
//     }
//   };

//   function showAlert() {
//     Swal.fire({
//         title: 'Thank You For Booking....',
//         text: 'Your Tour is successfully booked... ',
//         icon: 'success',
//         confirmButtonText: 'okay'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             document.getElementById('myForm').reset(); 
//         }
//     });
//   }

//   function showErrorAlert() {
//     Swal.fire({
//       title: 'Error',
//       text: 'Booking failed. Please try again later.',
//       icon: 'error',
//       confirmButtonText: 'OK'
//     });
//   }

//   function showLoginAlert() {
//     Swal.fire({
//       title: 'You are not logged in',
//       text: 'Please log in to book the tour.',
//       icon: 'info',
//       confirmButtonText: 'OK'
//     });
//   }

//   const minDate = new Date();
//   const maxDate = new Date();
//   maxDate.setFullYear(maxDate.getFullYear() + 1);

//   return (
//     <div className="booking">
//       <div className="booking__top d-flex align-items-center justify-content-between">
//         <h3>₹{price} <span>/per person</span></h3>
//       </div>
//       <div className="booking__form">
//         <h5>Information</h5>
//         <Form className='booking__info-form' onSubmit={handleBooking} id='myForm'>
//           <FormGroup>
//             <TextField id="fullName" label="Enter your name" variant="standard" onChange={handleChange} type='text' error={errors.fullName} helperText={errors.fullName && "Full name is required"} className='form-control' required disabled={!user} />
//           </FormGroup>
//           <FormGroup>
//             <TextField id="phone" label="Phone number" variant="standard" onChange={handleChange} type='text' error={errors.phone} helperText={errors.phone && "Phone number is required"} className='form-control' required disabled={!user} />
//           </FormGroup>
//           <FormGroup>
//             <TextField id="tourName" label="Tour Name" variant="standard" onChange={handleChange} type='text' error={errors.tourName} helperText={errors.tourName && "Tour name is required"} className='form-control' required disabled={!user} />
//           </FormGroup>
//           <FormGroup className='d-flex align-items-center justify-content-between gap-3'>
//             <DatePicker selected={booking.bookAt} onChange={handleDateChange} dateFormat={"dd/MM/yyyy"} minDate={minDate} maxDate={maxDate} placeholderText='Select a date' error={errors.bookAt} className='form-control' id='bookAt' disabled={!user} />
//             <TextField id="guestSize" label="No. Of Guests" variant="standard" onChange={handleChange} type='text' error={errors.guestSize} helperText={errors.guestSize && "Number of guests is required"} className='form-control' required disabled={!user} />
//           </FormGroup>
//           <Button type="submit" className='btn primary__btn w100 mt-4 form-control' >
//             Book Now
//           </Button>
//         </Form>
//       </div>
//       <div className="booking__bottom">
//         <ListGroup>
//           <ListGroupItem className='border-0 px-0'>
//             {price && (
//               <>
//                 <h6 className='d-flex align-items-center gap-1'>₹{price} <i className="ri-close-line"></i> {booking.guestSize} person = ₹{calculateCharges().amount}</h6>
//                 <h6>Service Charge = ₹{calculateCharges().serviceCharge}</h6>
//                 <h6>GST Amount = ₹{calculateCharges().gst}</h6>
//                 <h3>Total = ₹{calculateCharges().total}</h3>
//               </>
//             )}
//           </ListGroupItem>
//         </ListGroup>
//       </div>
//     </div>
//   );
// };

// export default Booking;
import React, { useContext, useState } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utlis/config';

const Booking = ({ tour }) => {
  const { price } = tour;
  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: '', 
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: `${new Date()}`, 
  });

  const [errors, setErrors] = useState({
    fullName: false,
    phone: false,
    bookAt: false,
    guestSize: false,
    tourName:false
  });

  const handleChange = e => {
    if (!user) return; 
    const { id, value } = e.target;
    setBooking(prev => ({ ...prev, [id]: value }));
    setErrors(prev => ({ ...prev, [id]: value.trim() === '' }));
  };

  const handleDateChange = date => {
    setBooking(prev => ({ ...prev, bookAt: date }));
    setErrors(prev => ({ ...prev, bookAt: !date }));
  };

  const calculateCharges = () => {
    const originalAmount = price || 0;
    const noOfGuests = parseInt(booking.guestSize) >= 0 ? parseInt(booking.guestSize) : 0;
    const amount = originalAmount * noOfGuests || 0;
    const gst = amount > 0 ? Math.ceil(amount * 0.18) : 0;
    const serviceCharge = amount > 0 ? calculateServiceCharge(amount) : 0;
    const total = amount + gst + serviceCharge || 0;
    return { amount, serviceCharge, gst, total };
  };

  const calculateServiceCharge = amt => {
    return Math.min(Math.max(amt * 0.05, 0.10));
  };

  const handleBooking = async e => {
    e.preventDefault();
    try {
      if (!user) {
        showLoginAlert();
        return;
      }
      const token = localStorage.getItem('accessToken');
      console.log("token",token);
      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'POST',
        headers:{
          "Content-Type":"application/json",
          "Authorization": `Bearer ${token}`,
        },
        credentials:'include',
        body:JSON.stringify(booking)
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message || 'Booking failed');
      }
      showAlert();
    } catch (err) {
      showErrorAlert();
    }
  };

  function showAlert() {
    Swal.fire({
        title: 'Thank You For Booking....',
        text: 'Your Tour is successfully booked... ',
        icon: 'success',
        confirmButtonText: 'okay'
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById('myForm').reset(); 
        }
    });
  }

  function showErrorAlert() {
    Swal.fire({
      title: 'Error',
      text: 'Booking failed. Please try again later.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }

  function showLoginAlert() {
    Swal.fire({
      title: 'You are not logged in',
      text: 'Please log in to book the tour.',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>₹{price} <span>/per person</span></h3>
      </div>
      <div className="booking__form">
        <h5>Information</h5>
        <Form className='booking__info-form' onSubmit={handleBooking} id='myForm'>
          <FormGroup>
            <TextField id="fullName" label="Enter your name" variant="standard" onChange={handleChange} type='text' error={errors.fullName} helperText={errors.fullName && "Full name is required"} className='form-control' required disabled={!user} />
          </FormGroup>
          <FormGroup>
            <TextField id="phone" label="Phone number" variant="standard" onChange={handleChange} type='text' error={errors.phone} helperText={errors.phone && "Phone number is required"} className='form-control' required disabled={!user} />
          </FormGroup>
          <FormGroup>
            <TextField id="tourName" label="Tour Name" variant="standard" onChange={handleChange} type='text' error={errors.tourName} helperText={errors.tourName && "Tour name is required"} className='form-control' required disabled={!user} />
          </FormGroup>
          <FormGroup className='d-flex align-items-center justify-content-between gap-3'>
            <DatePicker selected={booking.bookAt} onChange={handleDateChange} dateFormat={"dd/MM/yyyy"} minDate={minDate} maxDate={maxDate} placeholderText='Select a date' error={errors.bookAt} className='form-control' id='bookAt' disabled={!user} />
            <TextField id="guestSize" label="No. Of Guests" variant="standard" onChange={handleChange} type='text' error={errors.guestSize} helperText={errors.guestSize && "Number of guests is required"} className='form-control' required disabled={!user} />
          </FormGroup>
          <Button type="submit" className='btn primary__btn w100 mt-4 form-control' >
            Book Now
          </Button>
        </Form>
      </div>
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className='border-0 px-0'>
            {price && (
              <>
                <h6 className='d-flex align-items-center gap-1'>₹{price} <i className="ri-close-line"></i> {booking.guestSize} person = ₹{calculateCharges().amount}</h6>
                <h6>Service Charge = ₹{calculateCharges().serviceCharge}</h6>
                <h6>GST Amount = ₹{calculateCharges().gst}</h6>
                <h3>Total = ₹{calculateCharges().total}</h3>
              </>
            )}
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
};

export default Booking;