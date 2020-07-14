import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {
  const proyectos = [
    { nombre: 'proyecto1' },
    { nombre: 'proyecto2' },
    { nombre: 'proyecto3' },
    { nombre: 'proyecto4' },
  ];
  return (
    <div>
      <ul className="listado-proyectos">
        {proyectos.map((proyecto) => (
          <Proyecto proyecto={proyecto} />
        ))}
      </ul>
    </div>
  );
};

export default ListadoProyectos;
