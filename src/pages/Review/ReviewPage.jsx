import "./ReviewStyles.css"
import React, { useState, useEffect } from "react";
import { getStockData } from "./getStockData";

export function ReviewPage() {
    const [stockData, setStockData] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadStockData = async () => {
        try {
            const data = await getStockData();
            setStockData(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching stock data:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        loadStockData();
    }, []);

    return (
        <div className="review">
            <h1>Revisión de Acciones</h1>
            {loading ? (
                <p>Cargando datos...</p>
            ) : (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre de la Acción</th>
                                <th>Cantidad</th>
                                <th>Valor Monetario por Acción</th>
                                <th>Valor de Mercado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stockData.map(stock => (
                                <tr key={stock.id}>
                                    <td>{stock.name_stock}</td>
                                    <td>{stock.quantity}</td>
                                    <td>{stock.monetaryValue}</td>
                                    <td>{stock.quantity * stock.monetaryValue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
