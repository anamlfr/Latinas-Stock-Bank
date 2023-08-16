import "./DashboardStyles.css";
import React, { useState } from "react";

export function DashboardPage() {
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleCurrentPinChange = (event) => {
    setCurrentPin(event.target.value);
  };

  const handleNewPinChange = (event) => {
    setNewPin(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const savedPin = "pass23"; 
    if (currentPin === savedPin) {
      setMessage("PIN cambiado exitosamente");
      setSuccess(true);
    } else {
      setMessage("PIN actual incorrecto");
      setSuccess(false);
    }
  };

  return (
    <div className="dashboard">
      <h1>Cambiar PIN</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          className="data"
          type="password"
          placeholder="Ingrese PIN actual"
          value={currentPin}
          onChange={handleCurrentPinChange}
        />
        <br />
        <input
          className="data"
          type="password"
          placeholder="Ingrese nuevo PIN"
          value={newPin}
          onChange={handleNewPinChange}
        />
        <br />
        <button type="submit">Cambiar PIN</button>
      </form>
      {message && (
        <p className={success ? "success" : "error"}>{message}</p>
      )}
    </div>
  );
}
