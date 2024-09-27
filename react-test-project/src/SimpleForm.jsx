import React, { useState } from 'react';
import Greetings from "./Greetings";

function SimpleForm() {
  const [firstName, setFirstName] = useState('');

  return (
    <div>
      <input type="text" name="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      
      <Greetings firstName={firstName} />
    </div>
  );
}

export default SimpleForm;
