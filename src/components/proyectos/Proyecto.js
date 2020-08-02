import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({ proyecto }) => {
  // state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { ProyectoActual } = proyectosContext;

  //obtener tareas context
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  //funcion agregar proyecto actual
  const seleccionarProyecto = (id) => {
    ProyectoActual(id); //fijar proyecto actual
    obtenerTareas(id); //obtener tareas del proyecto
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
