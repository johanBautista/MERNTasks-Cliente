import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';

const NuevaCuenta = () => {
  //extraer el context de alertas
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const [usuario, guardarUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: '',
  });

  //
  const { nombre, email, password, confirmar } = usuario;

  //
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //
  const onSubmit = (e) => {
    e.preventDefault();
    //validaciones- campos vacios
    if (
      nombre.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmar.trim() === ''
    ) {
      mostrarAlerta('Todos los campos son Obligatorios', 'alerta-error');
      return;
    }
    //password minimo 6 caract.
    if (password.length < 6) {
      mostrarAlerta('El password minimo 6 caracteres', 'alerta-error');
      return;
    }
    //passwords iguales
    if (password !== confirmar) {
      mostrarAlerta('Los passwords no son iguales', 'alerta-error');
      return;
    }
    //una vez validado pasar al action para hacer el registro
  };
  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg} </div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una Cuenta</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Tu Nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Tu email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Tu password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Confirma tu Password</label>
            <input
              type="password"
              name="confirmar"
              id="confirmar"
              placeholder="Repite tu password"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              value="Registrarme"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>

        <Link to={'/'} className="enlace-cuenta">
          Volver a iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
