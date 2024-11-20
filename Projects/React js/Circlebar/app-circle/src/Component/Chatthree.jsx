import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";








function getData() {
    return [
        { asset: "Stocks", amount: 60000, yield: 3 },
        { asset: "Bonds", amount: 40000, yield: 4 },
        { asset: "Cash", amount: 7000, yield: 0.75 },
        { asset: "Real Estate", amount: 5000, yield: 4 },
        { asset: "Commodities", amount: 3000, yield: 5 },
    ];
}


const Chatthree = () => {
    const [options, setOptions] = useState({
        data: getData(),
        title: {
            text: "Portfolio Composition",
        },
        subtitle: {
            text: "Showing Annual Yield",
        },
        series: [
            {
                type: "pie",
                angleKey: "amount",
                radiusKey: "yield",
                legendItemKey: "asset",
            },
        ],
    });

    return <AgCharts options={options} />;
};

export default Chatthree