
import React from 'react';
import './Tradehistary.css'; 

const TradeHistory = ({ trades }) => (
    <div className="trade-history">
        <h2>Trade History</h2>
        <ul>
            {trades.map((trade, index) => (
                <li key={index}>
                    Traded {trade.quantity} shares of {trade.stock.name} ({trade.stock.symbol}) at ${trade.stock.price} each
                </li>
            ))}
        </ul>
    </div>
);

export default TradeHistory;