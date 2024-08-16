
import React from 'react';

const StockList = ({ stocks, onSelect }) => (
  <div>
    <h2>Available Stocks</h2>
    <ul>
      {stocks.map((stock) => (
        <li key={stock.symbol} onClick={() => onSelect(stock)}>
          {stock.name} ({stock.symbol}) - ${stock.price}
        </li>
      ))}
    </ul>
  </div>
);

export default StockList;