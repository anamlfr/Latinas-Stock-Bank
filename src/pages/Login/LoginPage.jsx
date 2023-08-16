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
    <div className="center">
      <h2>Iniciar Sesión</h2>
      <div>
        <label>Nombre Completo:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Usuario:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}

export default LoginPage;
