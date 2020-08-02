import React, { useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
  // state-context del formulario
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //obtener tareas context
  const tareasContext = useContext(tareaContext);
  const { agregarTarea } = tareasContext;

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
    //añadir la tarea
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);
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
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
