import React, { useState, useEffect } from 'react';
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

function Inlinechart(props) {
  const [data, setData] = useState(Array(20).fill(null));
  const [label, setLabel] = useState(Array(20).fill(' '));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://3.66.86.173/'+props.nameId);
        const data_j = await response.json();
        

        data.shift();
        data.push(data_j.random_number);
        setData(data);

        if(response){
          const now = new Date().toISOString();
          const newLabelBuffer = [...label];
          label.shift();
          label.push(now);
          setLabel([...label]);
        }



      } catch (error) {
        console.log(error);
      }
    };

    const intervalId = setInterval(() => {
      fetchData();
    }, 100000);

    fetchData();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const chartData = {
    labels: label,
    datasets: [
      {
        label: 'Data Value',
        data: data,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis'
      }
    }
  }

  return (
    <div>
      <h1>Data Display</h1>
      {chartData && (
        <Line data={chartData} options={options}></Line>
      )}
    </div>
  );
}

export default Inlinechart;
