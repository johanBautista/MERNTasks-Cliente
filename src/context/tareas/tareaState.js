import React, { useReducer } from 'react';

import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
// import uuid, { v4 as uuidv4 } from 'uuid';
import clienteAxios from '../../config/axios';

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from '../../types';

const TareaState = (props) => {
  const initialstate = {
    // tareas: [
    //   { id: 1, nombre: 'tarea1', estado: true, proyectoId: 1 },
    //   { id: 2, nombre: 'tarea2', estado: false, proyectoId: 2 },
    //   { id: 3, nombre: 'tarea3', estado: true, proyectoId: 3 },
    //   { id: 4, nombre: 'tarea4', estado: false, proyectoId: 4 },
    //   { id: 5, nombre: 'tarea11', estado: true, proyectoId: 1 },
    //   { id: 6, nombre: 'tarea22', estado: false, proyectoId: 2 },
    //   { id: 7, nombre: 'tarea33', estado: true, proyectoId: 3 },
    // ],
    tareasproyecto: [],
    errortarea: false,
    tareaseleccionada: null,
  };

  //crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialstate);

  //---funciones

  //obtener tareas proyecto
  const obtenerTareas = async (proyecto) => {
    // console.log(proyecto);
    try {
      const resultado = await clienteAxios.get('/api/tareas', {
        params: { proyecto },
      });
      console.log(resultado.data.tareas);
      dispatch({
        type: TAREAS_PROYECTO,
        payload: resultado.data.tareas,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // agregar tarea
  const agregarTarea = async (tarea) => {
    // tarea.id = uuidv4();

    try {
      const resultado = await clienteAxios.post('/api/tareas', tarea);
      console.log(resultado);
      dispatch({
        type: AGREGAR_TAREA,
        payload: tarea,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //valida y muestra error
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  //eliminar tarea
  const eliminarTarea = async (id, proyecto) => {
    try {
      await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto } });
      dispatch({
        type: ELIMINAR_TAREA,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //cambio estado tarea
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  //extraer tarea actual para editarla
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  //modifica una tarea
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  //elimina la tarea seleccionada
  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        // tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
