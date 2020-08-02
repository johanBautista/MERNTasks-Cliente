import React, { useReducer } from 'react';

import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = (props) => {
  const initialstate = {
    tareas: [],
  };

  //crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialstate);

  
  return (
    <TareaContext.Provider value={{}}>{props.children}</TareaContext.Provider>
  );
};

export default TareaState;
