import React from 'react';

export default ({backGroundColor,top,bottom,left,right,content}) => {
  const style = {
    background: backGroundColor || '#000000'
  };

  if(top){
    style.top = top;
  }
  if(bottom){
    style.bottom = bottom;
  }
  if(left){
    style.left = left;
  }
  if(right){
    style.right = right;
  }

  return <span className="badge" style={style}>{content}</span>;
};