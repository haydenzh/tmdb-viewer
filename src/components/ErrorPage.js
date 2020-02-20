import React from 'react';

export default ({error}) => {
  return (
    <div style={{padding:'10px',textAlign:'center'}}>
      <h5 style={{color:'red'}}>{error || "Opps! Something went wrong!"}</h5>
    </div>
  );
}