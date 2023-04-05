import React from 'react';
import DevicesList from "../components/DevicesList";
  
function Devices() {

    return (
        <>
        <div className='devices'>
            <h1>Devices</h1>
        </div>
        <hr>
        </hr>
        <div>
           <DevicesList />
        </div>
        </>
    );
}

export default Devices;

//        <h1>this is the devices page</h1>