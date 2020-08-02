import React, { useReducer } from 'react';

import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { TAREAS_PROYECTO } from '../../types';

const TareaState = (props) => {
  const initialstate = {
    tareas: [
      { nombre: 'tarea1', estado: true, proyectoId: 1 },
      { nombre: 'tarea2', estado: false, proyectoId: 2 },
      { nombre: 'tarea3', estado: true, proyectoId: 3 },
      { nombre: 'tarea4', estado: false, proyectoId: 4 },
      { nombre: 'tarea11', estado: true, proyectoId: 1 },
      { nombre: 'tarea22', estado: false, proyectoId: 2 },
      { nombre: 'tarea33', estado: true, proyectoId: 3 },
    ],
    tareasproyecto: null,
  };

  //crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialstate);

  //---funciones
  //obtener tareas proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <TareaContext.Provider
      value={{ 
        tareas: state.tareas, 
        tareasproyecto:state.tareasproyecto, 
        obtenerTareas }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
