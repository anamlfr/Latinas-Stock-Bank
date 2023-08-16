import "./BuyStyles.css"
import React, { useState, useEffect } from "react";
import { getStockData } from "../Review/getStockData";


export function BuyPage() {
    const [stockData, setStockData] = useState([]);
    const [selectedStock, setSelectedStock] = useState(null);
    const [buyQuantity, setBuyQuantity] = useState(0);
    const [userFunds, setUserFunds] = useState(2800);

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
    };

    const handleBuyQuantityChange = (event) => {
        setBuyQuantity(parseInt(event.target.value));
    };

    const handleBuyAction = () => {
        if (!selectedStock) {
            alert("Selecciona una acción para comprar.");
            return;
        }

        const totalPrice = selectedStock.price * buyQuantity;

        if (totalPrice <= userFunds) {

            const updatedFunds = userFunds - totalPrice;
            setUserFunds(updatedFunds);

            const updatedStockData = stockData.map(stock => {
                if (stock.id === selectedStock.id) {
                    return {
                        ...stock,
                        quantity: stock.quantity + buyQuantity
                    };
                }
                return stock;
            });
            setStockData(updatedStockData);

            setSelectedStock(null);
            setBuyQuantity(0);

            alert("Compra exitosa. Acciones adquiridas.");
        } else {
            alert("No tienes fondos suficientes para comprar estas acciones.");
        }

    };

    return (
        <div className="buy">
            <h2>Comprar Acciones</h2>
            <div className="buy-select">
                <ul>
                    <h3>Selecciona una acción</h3>

                    {stockData.map((stock) => (
                        <li key={stock.id} onClick={() => handleStockSelect(stock)}>
                            {stock.name_stock}
                        </li>
                    ))}
                </ul>
            </div>
            {selectedStock && (
                <div className="buy-selected-stock">
                    <h3>{selectedStock.name_stock}</h3>
                    <p>Precio por Acción: {selectedStock.price}</p>
                    <p>Fondos Disponibles: {userFunds}</p>
                    <input
                        type="number"
                        value={buyQuantity}
                        onChange={handleBuyQuantityChange}
                    />
                    <button onClick={handleBuyAction}>Comprar</button>
                </div>
            )}
        </div>
    )
}
