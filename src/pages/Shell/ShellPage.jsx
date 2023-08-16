import "./ShellStyles.css"
import React, { useState, useEffect } from "react";
import { getStockData } from "../Review/getStockData";

export function ShellPage(){
    const [stockData, setStockData] = useState([]);
    const [selectedStock, setSelectedStock] = useState(null);
    const [sellQuantity, setSellQuantity] = useState(0);
    const [userFunds, setUserFunds] = useState(5000);

    useEffect(() => { 
        getStockData()
            .then(data => {
                setStockData(data);
            })
            .catch(error => {
                console.error("Error al obtener los datos de las acciones:", error);
            });
    }, []); 

    const handleStockSelect = (stock) => {
        setSelectedStock(stock);
        setSellQuantity(0);
    };

    const handleSellQuantityChange = (event) => {
        setSellQuantity(parseInt(event.target.value));
    };

    const handleSellAction = () => {
        if (!selectedStock) {
            alert("Selecciona una acción para vender.");
            return;
        }

        if (sellQuantity <= 0) {
            alert("Ingresa una cantidad válida para vender.");
            return;
        }

        if (sellQuantity > selectedStock.quantity) {
            alert("No tienes suficientes acciones para vender.");
            return;
        }

        const totalPrice = selectedStock.price * sellQuantity;

        // Actualizar fondos disponibles
        const updatedFunds = userFunds + totalPrice;
        setUserFunds(updatedFunds);

        // Actualizar acciones propias
        const updatedStockData = stockData.map(stock => {
            if (stock.id === selectedStock.id) {
                return {
                    ...stock,
                    quantity: stock.quantity - sellQuantity
                };
            }
            return stock;
        });
        setStockData(updatedStockData);

        setSelectedStock(null);
        setSellQuantity(0);

        alert("Venta exitosa. Fondos actualizados.");
    };

    return(
        <div className="buy">
        <h1>Vender Acciones</h1>
        <div className="stock-list">
                <h2>Selecciona una acción para vender:</h2>
                <ul>
                    {stockData.map(stock => (
                        <li key={stock.id} onClick={() => handleStockSelect(stock)}>
                            {stock.name_stock}
                        </li>
                    ))}
                </ul>
            </div>
            {selectedStock && (
                <div className="sell-form">
                    <h2>{selectedStock.name_stock}</h2>
                    <p>Precio por Acción: {selectedStock.price}</p>
                    <p>Cantidad de Acciones en Posesión: {selectedStock.quantity}</p>
                    <p>Fondos Disponibles: {userFunds}</p>
                    <input
                        type="number"
                        value={sellQuantity}
                        onChange={handleSellQuantityChange}
                    />
                    <button onClick={handleSellAction}>Vender</button>
                </div>
            )}

    </div>
    )
    }
       