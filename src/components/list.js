import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function DeviceList() {
  const [deviceList, setDeviceList] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://3.66.86.173/devices?client=clientID');
            const dev_list = await response.json();
            setDeviceList(deviceList);
        
        } catch (error) {
            console.log(error);
          }
        };
    })


  useEffect(() => {
    if (selectedDevice) {
      const interval = setInterval(() => {
        axios.get(`/api/devices/${selectedDevice.id}/data`)
          .then(response => {
            setChartData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, 50000);

      return () => clearInterval(interval);
    }
  }, [selectedDevice]);

  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
  };

  return (
    <div>
      <h1>Device List</h1>
      <ul>
        {deviceList.map(device => (
          <li key={device.id} onClick={() => handleDeviceClick(device)}>{device.name}</li>
        ))}
      </ul>
      {selectedDevice && (
        <div>
          <h2>{selectedDevice.name} Data</h2>
          {chartData && (
            <Line data={data} options={options}></Line>
          )}
        </div>
      )}
    </div>
  );
}

export default DeviceList;
