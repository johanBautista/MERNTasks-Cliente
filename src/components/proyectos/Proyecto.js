import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({ proyecto }) => {
  // state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { ProyectoActual } = proyectosContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => ProyectoActual(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
