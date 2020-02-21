import React from 'react';

const ctx = React.createContext({});

export const Provider = (props) => {
  return (
    <ctx.Provider value={props.value}>
      {props.children}
    </ctx.Provider>
  );
}

export default ctx;