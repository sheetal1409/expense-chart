
import React from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"




export function Graph(props) {

    const [userData, setUserData] = React.useState({
        labels: props.data.map(data => data.day),
        datasets: [{
            label: "Spending - Last 7 Days",
            fill: false,
            data: props.data.map(data => data.amount),
            backgroundColor: " hsl(10, 79%, 65%)",
            border: 'none',
            padding: '10',
        }],

    })

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

    // const items = props.data.map((item, idx) => <div className="graph-bar tooltip" style={{ "height": "span(item.amount)" }}>
    //     <span className="tooltiptext">${item.amount}</span>
    //     <div>

    //     </div>
    //     <h6 className="day">{item.day}</h6></div >)
    return (
        <div className="graphdivs"  >
            <div className="chartbar"> <Bar style={{ margin: 0, padding: 10 }} options={options} data={userData} /></div>
        </div>
    )
}