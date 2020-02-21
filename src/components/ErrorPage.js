import React from 'react';

export default ({error}) => {
  return (
    <div style={{padding:'10px',textAlign:'center'}}>
      <h4 style={{color:'red'}}>{error || "Opps! Something went wrong!"}</h4>
    </div>
  );
}