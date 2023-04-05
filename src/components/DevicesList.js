import React, { useState, useEffect } from 'react';
import Inlinechart from "../components/Inlinechart";
import SendVariable from "./SendVariable";

const DevicesList = () => {
  const [devices, setDevices] = useState([]); // Inizializza l'array di dispositivi a vuoto
  const [selectedDevice, setSelectedDevice] = useState(false); // Inizializza il dispositivo selezionato a null

  useEffect(() => {
    async function fetchData() {
    try{
      const response = await fetch('http://3.66.86.173/devices?clientId=ciao');
      const data = await response.json();
      setDevices([...data.devices]);
      console.log(devices);
    } catch(error) {
      console.error(error);
    }
  }
  fetchData();
  }, []);

  const handleDeviceClick = (device) => {
    setSelectedDevice(device); // Imposta il dispositivo selezionato
  };

  const handleCloseModal = () => {
    setSelectedDevice(null); // Imposta il dispositivo selezionato a null per chiudere la finestra modale
  };


  return (
    <div>
      <h1>Lista Dispositivi</h1>
      <ul>
        {!selectedDevice && devices.map((device) => (
          <li className='my-list-li' key={device} onClick={() => handleDeviceClick(device)}>
            {device}
          </li>
        ))}
      </ul>
      <div className={`modal ${selectedDevice ? 'open' : ''}`}>
      <div className="modal-content">
          <button className="close-button" onClick={handleCloseModal}>X</button>
          <Inlinechart nameId="random_numb"/>
          <SendVariable device={selectedDevice} 
          variable = "Temperatura1"/>
          <SendVariable device={selectedDevice} 
          variable = "Temperatura2"/>
          <SendVariable device={selectedDevice} 
          variable = "Temperatura3"/>
          

      </div>
      </div>
    </div>  
  );
};

export default DevicesList;


