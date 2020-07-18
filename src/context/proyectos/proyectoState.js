import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';

const ProyectoState = (props) => {
  //arreglo simula DB
  const proyectos = [
    { id: 1, nombre: 'proyecto1' },
    { id: 2, nombre: 'proyecto2' },
    { id: 3, nombre: 'proyecto3' },
    { id: 4, nombre: 'proyecto4' },
  ];
  const initialState = {
    proyectos: [],
    formulario: false,
  };

  //
  const [state, dispatch] = useReducer(proyectoReducer, initialState);
  // mostrar form
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  // dispatch para obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };
  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
