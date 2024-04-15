import React, { useState } from 'react';
import './service-card.css';

const ServiceCard = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const { imageUrl, title, desc } = item;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`service__item ${isFlipped ? 'is-flipped' : ''}`}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
      <div className="service__face service__face--front">
        <div className="service__img">
          <img src={imageUrl} alt="" />
        </div>
        <h5>{title}</h5>
      </div>
      <div className="service__face service__face--back">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
