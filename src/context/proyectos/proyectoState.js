import React, { useReducer } from 'react';
import uuid, { v4 as uuidv4 } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
} from '../../types';

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

  // agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4();

    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };
  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
