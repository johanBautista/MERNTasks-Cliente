import React, { useReducer } from 'react';
// import uuid, { v4 as uuidv4 } from 'uuid';

import AlertaContext from './alertaContext';
import AlertaReducer from './alertaReducer';
import { OCULTAR_ALERTA, MOSTRAR_ALERTA } from '../../types';

const AlertaState = (props) => {
  //state inicial
  const initialState = {
    alerta: null,
  };

  //
  const [state, dispatch] = useReducer(AlertaReducer, initialState);

  //funciones
  const mostrarAlerta = (msg, categoria) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        msg,
        categoria,
      },
    });
    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA,
      });
    }, 5000);
  };

  //
  return (
    <AlertaContext.Provider value={{ alerta: state.alerta, mostrarAlerta }}>
      {props.children}
    </AlertaContext.Provider>
  );
};

export default AlertaState;
