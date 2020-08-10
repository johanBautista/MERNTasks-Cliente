import React, { useReducer } from 'react';
// import uuid, { v4 as uuidv4 } from 'uuid';

import AlertaContext from './alertaContext';
import AlertaReducer from './alertaReducer';
import {} from '../../types';

const AlertaState = (props) => {
  //state inicial
  const initialState = {};

  //
  const [state, dispatch] = useReducer(AlertaReducer, initialState);

  //
  return (
    <AlertaContext.Provider value={{}}>{props.children}</AlertaContext.Provider>
  );
};

export default AlertaState;
