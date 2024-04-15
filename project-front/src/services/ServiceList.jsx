import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'react-bootstrap';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customationImg from '../assets/images/customization.png';

const servicesData = () => [
  {
    imageUrl: weatherImg,
    title: 'Calculate Weather',
    desc:`Our weather service leverages the power of the OpenWeather Map API to offer you up-to-date weather information for any city worldwide. Whether you're planning a trip, checking the weather for your daily commute and  all presented in a user-friendly interface.`
  },
  {
    imageUrl: guideImg,
    title: 'Best Tour Guide',
    desc: `Embark on unforgettable journeys with our service, offering the best tour guides tailored to your travel needs. Whether you're seeking an adventure-filled expedition, a cultural immersion, or a relaxing getaway, our experienced guides are here to enhance your travel experience`,
  },
  {
    imageUrl: customationImg,
    title: 'Customization',
    desc: `Customization is a powerful tool that allows businesses to tailor their products or services to meet specific preferences and needs.  By understanding the unique preferences, interests, and requirements of each traveler can create customized travel itineraries, tours.`,
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData().map((item, index) => (
        <Col lg="3" md='6' sm= "12" className='mb-4' key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
