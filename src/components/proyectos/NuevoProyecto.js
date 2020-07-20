import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
  // state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;
  //
  const [proyecto, guardarProyecto] = useState({
    nombre: '',
  });

  //
  const { nombre } = proyecto;

  //
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //
  const onSubmitProyecto = (e) => {
    e.preventDefault();
    if (nombre === '') {
      return;
    }
    //
    agregarProyecto(proyecto);
    //
    guardarProyecto({
      name: '',
    });
  };

  //func activar mostrar form
  const mostrarProyecto = () => {
    mostrarFormulario();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={mostrarProyecto}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
