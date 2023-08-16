import React, { useState} from "react";
import "./PinPage.css"

function PinPage({ pin, onPinSubmit, stockData }) {
  const [enteredPin, setEnteredPin] = useState("");

  const handlePinChange = (event) => {
    setEnteredPin(event.target.value);
  };

  const handleSubmit = () => {
    const authenticatedUser = stockData.find(user => user.pin === enteredPin);

    if (authenticatedUser) {
      onPinSubmit(authenticatedUser);
    } else {
      alert("PIN incorrecto");
    }
  };

  return (
    <div className="center-pin">
      <div>
        <input 
        className="data-pin"
        type="password" 
        placeholder="Ingrese su PIN"
        value={enteredPin} 
        onChange={handlePinChange} 
        />
      </div>
      <button onClick={handleSubmit}>Continuar</button>
    </div>
  );
}

export default PinPage;
