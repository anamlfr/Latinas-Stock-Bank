import "./GenerateStyles.css"
import React, { useState, useEffect } from "react";
import { getStockData } from "../Review/getStockData";

export function GeneratePage({ name, username, userFunds}) {
  const [stockData, setStockData] = useState([]);
  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    getStockData()
      .then(data => {
        setStockData(data);
      })
      .catch(error => {
        console.error("Error al obtener los datos de las acciones:", error);
      });
  }, []);

  const filteredStockData = stockData.filter((stock) => stock.username === username);

  return (
    <div className="generate">
      <h1>Estado de Cuenta</h1>
      <div className="user-details">
        <h2>Detalles del Usuario</h2>
        <p>Nombre: {name}</p>
        <p>Usuario: {username}</p>
        <p>Fondos Disponibles: {userFunds}</p>
      </div>
      <div className="stock-details">
        <h2>Detalles de Acciones</h2>
        <ul>
          {stockData.map(stock => (
            <li key={stock.id}>
              {stock.name_stock}: Cantidad: {stock.quantity}, Valor: {stock.monetaryValue}
            </li>
          ))}
        </ul>
      </div>
      <div className="request-details">
        <h2>Detalles de la Solicitud</h2>
        <p>Fecha de Solicitud: {currentDate}</p>
      </div>
    </div>
  )
}

