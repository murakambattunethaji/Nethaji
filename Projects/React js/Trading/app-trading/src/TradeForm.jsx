
import React, { useState } from 'react';
import './Tradeform.css';

const TradeForm = ({ selectedStock, onTrade }) => {
    const [quantity, setQuantity] = useState(0);

    const handleTrade = () => {
        if (quantity > 0) {
            onTrade(selectedStock, quantity);
            setQuantity(0);
        } else {
            alert('Please enter a valid quantity.');
        }
    };

    return (
        <div className="trade-form">
            <h2>Trade {selectedStock?.name}</h2>
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                placeholder="Quantity"
            />
            <button onClick={handleTrade}>Trade</button>
        </div>
    );
};

export default TradeForm;