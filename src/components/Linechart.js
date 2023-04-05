import React from 'react'

import { Line } from 'react-chartjs-2';
  import {
      Chart as ChartJS,
      LineElement,
      CategoryScale,
      LinearScale,
      PointElement
  } from 'chart.js'
  ChartJS.register(
      LineElement,
      CategoryScale,
      LinearScale,
      PointElement
  )



function Linechart() {
    const labels = [65, 59, 80, 81, 56, 55, 40];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
    const options = {};

  return (
    <div>
      <h2> Line Chart </h2>
      <Line data={data} options={options}></Line>
    </div>
  )
}

export default Linechart