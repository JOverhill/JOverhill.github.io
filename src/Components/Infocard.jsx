import React from 'react';
import './Infocard.css';

const Infocard = ({ title, content, image  }) => {
  return (
    <div className="infocard">
      {image && <img src={image} alt={title} className="infocard-image" />}
      <h2 className="infocard-title">{title}</h2>
      <p className="infocard-content">{content}</p>
    </div>
  );
};

export default Infocard;
