import React, { useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {
  // state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //
  const [tarea, guardarTarea] = useState({
    nombre: '',
  });

  //
  const { nombre } = tarea;
  //
  if (!proyecto) return null;
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
