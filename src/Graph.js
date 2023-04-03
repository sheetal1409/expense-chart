
import React from "react"
import { data } from "./data"
import { Bar } from "react-chartjs-2"
import { } from "chart.js/auto"



export function Graph() {

    const chartData = {
        labels: data.map(data => data.day),
        datasets: [{
            label: "Spending - Last 7 Days",
            fill: false,
            data: data.map(data => data.amount),
            backgroundColor: " hsl(10, 79%, 65%)",
            border: 'none',
            padding: '10',
        }],
    }


    const options = {
        responsive: false,
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        borderDash: [3, 3],
                        zeroLineColor: "blue"
                    },
                    categoryPercentage: 0.7,
                    barPercentage: 0.9,
                    ticks: {
                        beginAtZero: true
                    }
                }
            ],
            yAxes: [
                {
                    display: false,
                    gridLines: {
                        display: false,
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }


    return (
        <div className="graphdivs"  >
            <div className="chartbar"> <Bar style={{ margin: 0, padding: 10 }} options={options} data={chartData} /></div>
        </div>
    )
}