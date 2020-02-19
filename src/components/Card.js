import React from 'react';

const Card = ({img,title,children,className}) => {
  return (
    <div className={className}>
      {img && <img src={img} />}
      <h5>{title}</h5>
      {children}
    </div>
  );
};

export default Card;