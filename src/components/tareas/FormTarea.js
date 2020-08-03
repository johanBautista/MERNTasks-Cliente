import React, { useState, useContext, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
  // state-context del formulario
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //obtener tareas context
  const tareasContext = useContext(tareaContext);
  const {
    tareaseleccionada,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    errortarea,
    actualizarTarea,
    limpiarTarea,
  } = tareasContext;

  //detectar si hay tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({
        nombre: '',
      });
    }
  }, [tareaseleccionada]);

  //
  const [tarea, guardarTarea] = useState({
    nombre: '',
  });

  //destructuring tarea
  const { nombre } = tarea;
  //condicional si no hay proyecto
  if (!proyecto) return null;
  //array destructuring extrer proyecto
  const [proyectoActual] = proyecto;

  //
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  //
  const onSubmit = (e) => {
    e.preventDefault();
    //validaciones
    if (nombre.trim() === '') {
      validarTarea();
      return;
    }
    // si es edicion o nueva tarea
    if (tareaseleccionada === null) {
      //añadir la tarea
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);
    } else {
      //actualizar tarea existente
      actualizarTarea(tarea);
      //elimina tarea seleccionada
      limpiarTarea();
    }
    //filtrar tarea por proyecto
    obtenerTareas(proyectoActual.id);
    // reiniciar el form
    guardarTarea({
      nombre: '',
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? 'Edita tu Tarea' : 'Agregar Tarea'}
          />
        </div>
      </form>
      {errortarea ? <p className="mensaje error">Nombre Obligatorio</p> : null}
    </div>
  );
};

export default FormTarea;
