import React from 'react';

const Proyecto = ({ proyecto }) => {

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        // onClick={() => seleccionarProyecto(proyecto._id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
