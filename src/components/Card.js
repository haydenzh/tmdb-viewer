import React from 'react';

const Card = ({img,title,children,className}) => {
  return (
    <div className={className}>
      {img && <div className="card-image-container"><img src={img} alt={title}/></div>}
      <div className="card-title">{title}</div>
      {children}
    </div>
  );
};

export default Card;