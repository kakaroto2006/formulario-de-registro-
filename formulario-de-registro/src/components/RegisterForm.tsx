
import { useState } from 'react';

function RegisterForm() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Validaciones en tiempo real
  const nombreValido = nombre.trim().length >= 3;

  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

  const passwordValida = password.length >= 8;

  // Todos los campos deben ser válidos
  const formularioValido =
    nombreValido && correoValido && passwordValida;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formularioValido) return;

    setMensaje(`¡Registro exitoso! ¡Bienvenido, ${nombre}!`);

    setNombre('');
    setCorreo('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Crear Cuenta
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Regístrate para comenzar
        </p>

        <form onSubmit={handleSubmit}>

          {/* Nombre */}
          <div className="mb-5">
            <label className="block font-semibold text-gray-700 mb-2">
              Nombre de usuario
            </label>

            <input
              type="text"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
                setMensaje('');
              }}
              placeholder="Ingresa tu nombre"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {nombre.length > 0 && !nombreValido && (
              <p className="text-red-500 text-sm mt-1">
                El nombre debe tener al menos 3 caracteres.
              </p>
            )}
          </div>

          {/* Correo */}
          <div className="mb-5">
            <label className="block font-semibold text-gray-700 mb-2">
              Correo electrónico
            </label>

            <input
              type="email"
              value={correo}
              onChange={(e) => {
                setCorreo(e.target.value);
                setMensaje('');
              }}
              placeholder="ejemplo@gmail.com"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {correo.length > 0 && !correoValido && (
              <p className="text-red-500 text-sm mt-1">
                Ingresa un correo electrónico válido.
              </p>
            )}
          </div>

          {/* Contraseña */}
          <div className="mb-6">
            <label className="block font-semibold text-gray-700 mb-2">
              Contraseña
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setMensaje('');
              }}
              placeholder="Mínimo 8 caracteres"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {password.length > 0 && !passwordValida && (
              <p className="text-red-500 text-sm mt-1">
                La contraseña debe tener al menos 8 caracteres.
              </p>
            )}
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={!formularioValido}
            className={`w-full rounded-lg p-3 font-bold text-white transition ${
              formularioValido
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Registrar
          </button>

        </form>

        {/* Mensaje de éxito */}
        {mensaje && (
          <div className="mt-5 rounded-lg bg-green-100 p-4 text-center text-green-700 font-semibold">
            {mensaje}
          </div>
        )}

      </div>
    </div>
  );
}

export default RegisterForm;
