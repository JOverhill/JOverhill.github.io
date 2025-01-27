import React from 'react';
import './Infocard.css';

const Infocard = ({ title, content, image, image2  }) => {
  return (
    <div className="infocard">
      <h2 className="infocard-title">{title}</h2>
      <p className="infocard-content">{content}</p>
      {image && <img src={image} alt={title} className="infocard-image" />}
      {image2 && <img src={image2} alt={title} className="infocard-image" />}
    </div>
  );
};

export default Infocard;
