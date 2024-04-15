import React, { useRef } from 'react';
import { Col, Form, FormGroup } from 'react-bootstrap';
import './search-bar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './../utlis/config.js';

const SearchBar = () => {
  const locationRef = useRef('');
  const distanceRef = useRef(0);
  const MaxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const SearchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = MaxGroupSizeRef.current.value;

    if (location.trim() === '' || distance.trim() === '' || maxGroupSize.trim() === '') {
      toast.warning('Please fill out all fields');
    } else {
      try {
        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);

        if (!res.ok) {
          toast.warning('Something went wrong!');
        } else {
          const result = await res.json();
          navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: result.data });
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred while processing your request');
      }
    }
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-fill"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="Where are you going?" ref={locationRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-fill"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input type="number" placeholder="Distance k/m" ref={distanceRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i className="ri-group-fill"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0" ref={MaxGroupSizeRef} />
            </div>
          </FormGroup>
          <span className="search__icon" onClick={SearchHandler}>
            <i className="ri-search-2-line"></i>
          </span>
        </Form>
      </div>
      <ToastContainer />
    </Col>
  );
};

export default SearchBar;
