import "./GenerateStyles.css"
import React, { useState, useEffect } from "react";
import { getStockData } from "../Review/getStockData";
import { PDFViewer } from "@react-pdf/renderer";
import GeneratePDF from "./GeneratePDF";

export function GeneratePage({ name, username}) {
  const [stockData, setStockData] = useState([]);
  const [showPDF, setShowPDF] = useState(false);
  const [currentDate, setCurrentDate] = useState(""); 

  useEffect(() => {
    getStockData()
      .then(data => {
        setStockData(data);

        const today = new Date();
        setCurrentDate(today.toLocaleDateString());
      })
      .catch(error => {
        console.error("Error al obtener los datos de las acciones:", error);
      });
  }, []);


  const generatePDF = () => {
    setShowPDF(true);
  };

  return (
    <div className="generate">
      <h2>Estado de Cuenta</h2>
      <div className="user-details">
        <h3>Detalles del Usuario</h3>
        <p>Nombre: Name</p>
        <p>Usuario: username </p>
        <p>Fondos Disponibles: $2800 </p>

      </div>
      <div className="stock-details">
        <h3>Detalles de Acciones</h3>
        <ul>
          {stockData.map(stock => (
            <li key={stock.id}>
             Nombre: {stock.name_stock} Cantidad: {stock.quantity} Valor: {stock.monetaryValue}
            </li>
          ))}
        </ul>
      </div>
      <div className="request-details">
        <h3>Detalles de la Solicitud</h3>
        <p>Fecha de Solicitud: {currentDate}</p>
      </div>

      <button onClick={generatePDF}>Generar PDF</button>
      {showPDF && (
        <PDFViewer style={{ width: "100%", height: "500px" }}>
          <GeneratePDF name="Ana Alfaro" username="anamlfr" userFunds="2800" currentDate={currentDate} stockData={stockData} />
        </PDFViewer>
      )}
      </div>
  )
}

