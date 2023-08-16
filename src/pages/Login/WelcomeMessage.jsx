import React from "react";
import "./WelcomeMessage.css"

function WelcomeMessage({ name }) {
  return (
    <div className="message">
        <p className="txt">Hola, ¡{name}! Ingrese su PIN para continuar.</p>
    </div>

  )

}

export default WelcomeMessage;
