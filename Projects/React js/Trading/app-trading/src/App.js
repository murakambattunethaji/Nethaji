// App.js
import React, { useState } from 'react';
import Stacklist from './Stacklist';
import TradeForm from './TradeForm';
import TradeHistory from './TradeHistory';
import './App.css';

const App = () => {
  const [stocks] = useState([
    { symbol: 'AAPL', name: 'Apple Inc.', price: 150 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2800 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3300 },
  ]);

  const [selectedStock, setSelectedStock] = useState(null);
  const [trades, setTrades] = useState([]);

  const handleSelectStock = (stock) => {
    setSelectedStock(stock);
  };

  const handleTrade = (stock, quantity) => {
    setTrades((prevTrades) => [...prevTrades, { stock, quantity }]);
  };

  return (
    <div className="container">
      <h1>Trading App</h1>
      <Stacklist stocks={stocks} onSelect={handleSelectStock} />
      {selectedStock && <TradeForm selectedStock={selectedStock} onTrade={handleTrade} />}
      <TradeHistory trades={trades} />
    </div>
  );
};

export default App;