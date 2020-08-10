import React, { useReducer } from 'react';
// import uuid, { v4 as uuidv4 } from 'uuid';

import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {} from '../../types';

const AuthState = (props) => {
  //state inicial
  const initialState = {};

  //
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //
  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
