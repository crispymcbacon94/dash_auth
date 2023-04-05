import React, { useState } from 'react';

function SendVariable(prop) {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleSendClick = () => {
    const data = {
      id: prop.device,
      name: prop.variable,
      value: parseInt(value),
    };
    
    const api_id = 'http://3.66.86.173/commands';
    fetch(api_id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div class="container">
      <div class="variable">{prop.variable}</div>
      <br />
      <label>
        <input type="number" value={value} onChange={handleValueChange} />
      </label>
      <br />
      <button class='button_send' onClick={handleSendClick}>Send</button>
    </div>
  );
}

export default SendVariable;
