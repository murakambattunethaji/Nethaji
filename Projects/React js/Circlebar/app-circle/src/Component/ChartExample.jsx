import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";



function getData() {
    return [
        { asset: "Stocks", amount: 60000 },
        { asset: "Bonds", amount: 40000 },
        { asset: "Cash", amount: 7000 },
        { asset: "Real Estate", amount: 5000 },
        { asset: "Commodities", amount: 3000 },
    ];
}

const ChartExample = () => {
    
    const [options, setOptions] = useState({
        data: getData(),
        title: {
            text: "Portfolio Composition",
        },
        series: [
            {
                type: "pie",
                angleKey: "amount",
                calloutLabelKey: "asset",
                sectorLabelKey: "amount",
                sectorLabel: {
                    color: "white",
                    fontWeight: "bold",
                    formatter: ({ value }) => `$${(value / 1000).toFixed(0)}K`,
                },
            },
        ],
    });
    return <AgCharts options={options} />;

};


export default ChartExample