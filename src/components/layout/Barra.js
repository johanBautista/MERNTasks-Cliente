import React from 'react';

const Barra = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>Fernando </span>
      </p>
      <nav className="nav-principal">
        <button className="btn btn-blank cerrar-sesion">Cerrar Sesión</button>
      </nav>{' '}
    </header>
  );
};

export default Barra;
