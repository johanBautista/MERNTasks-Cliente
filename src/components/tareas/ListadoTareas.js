import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: 'tarea1', estado: true },
    { nombre: 'tarea2', estado: false },
    { nombre: 'tarea3', estado: true },
    { nombre: 'tarea4', estado: false },
  ];

  return (
    <Fragment>
      <h2>desde listado tareas</h2>

      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button
      type="button"
        className="btn btn-eliminar"
        // onClick={onClickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
