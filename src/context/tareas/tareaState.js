import React, { useReducer } from 'react';

import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  EDITAR_TAREA,
  ESTADO_TAREA,
} from '../../types';

const TareaState = (props) => {
  const initialstate = {
    tareas: [
      { id: 1, nombre: 'tarea1', estado: true, proyectoId: 1 },
      { id: 2, nombre: 'tarea2', estado: false, proyectoId: 2 },
      { id: 3, nombre: 'tarea3', estado: true, proyectoId: 3 },
      { id: 4, nombre: 'tarea4', estado: false, proyectoId: 4 },
      { id: 5, nombre: 'tarea11', estado: true, proyectoId: 1 },
      { id: 6, nombre: 'tarea22', estado: false, proyectoId: 2 },
      { id: 7, nombre: 'tarea33', estado: true, proyectoId: 3 },
    ],
    tareasproyecto: null,
    errortarea: false,
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

  // agregar tarea
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  //valida y muestra error
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  //eliminar tarea
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  //editar tarea
  const editarTarea = (id) => {
    dispatch({
      type: EDITAR_TAREA,
      payload: id,
    });
  };

  //cambio estado tarea
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        editarTarea,
        cambiarEstadoTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
