import React, { useState} from "react";

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
    <div>
      <h2>Ingresa tu PIN</h2>
      <div>
        <label>PIN:</label>
        <input type="password" value={enteredPin} onChange={handlePinChange} />
      </div>
      <button onClick={handleSubmit}>Continuar</button>
    </div>
  );
}

export default PinPage;
