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
            <h2>Revisión de Acciones</h2>
            {loading ? (
                <p className="txt-review">Cargando datos...</p>
            ) : (
                <div>
                    <table className="review-action">
                        <thead>
                            <tr>
                                <th>Nombre de la Acción</th>
                                <th>Cantidad</th>
                                <th>Valor Monetario por Acción</th>
                                <th>Valor de Mercado</th>
                            </tr>
                        </thead>
                        <tbody className="review-data">
                            {stockData.map(stock => (
                                <tr key={stock.id}>
                                    <td>{stock.name_stock}</td>
                                    <td>{stock.quantity}</td>
                                    <td>$ {stock.monetaryValue}</td>
                                    <td>$ {stock.quantity * stock.monetaryValue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
