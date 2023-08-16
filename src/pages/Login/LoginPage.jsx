import React, { useState } from "react";
import "./LoginPage.css"

function LoginPage({ onLogin }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = () => {
    if (name && username) {
      onLogin(name, username);
    }
  };

  return (
    <div>
      <h1>Latinas Stock Bank</h1>
      <h3>Comienza a gestionar tus acciones</h3>
      <div className="center">
        <h2>Iniciar Sesión</h2>
        <div>
          <input
            className="data"
            type="text"
            placeholder="Ingrese nombre completo"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <input
            className="data"
            type="text"
            placeholder="Ingrese usuario"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <button className="btn" onClick={handleLogin}>Ingresar</button>
      </div>

    </div>

  );
}

export default LoginPage;
