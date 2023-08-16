import "./DepositStyles.css"
import React, { useState, useEffect } from "react";
import { getStockData } from "../Review/getStockData";

export function DepositPage() {
    const [stockData, setStockData] = useState([]);
    const [userFunds, setUserFunds] = useState(2800);
    const [addedFunds, setAddedFunds] = useState(0);
    const [viewBalance, setViewBalance] = useState(false);

    useEffect(() => {
        getStockData()
            .then(data => {
                setStockData(data);
            })
            .catch(error => {
                console.error("Error al obtener los datos de las acciones:", error);
            });
    }, []);

    const handleAddFunds = () => {
        setUserFunds(userFunds + addedFunds);
        setAddedFunds(0); 
    };

    const handleViewBalance = () => {
        setViewBalance(true);
    };

    return (
        <div className="deposit">
            <h1>Depositar Acciones</h1>
            <div className="add-funds">
                <h2>Agregar Fondos</h2>
                <input
                    type="number"
                    value={addedFunds}
                    onChange={(e) => setAddedFunds(parseFloat(e.target.value))}
                />
                <button onClick={handleAddFunds}>Agregar Fondos</button>
            </div>

            <div className="view-balance">
                <button onClick={handleViewBalance}>Ver Saldo</button>
                {viewBalance && (
                    <p>Tu saldo actual es: {userFunds}</p>
                )}
            </div>

        </div>
    )
}
