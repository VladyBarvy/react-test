// // src/Goodbye.js
// import React from 'react';

// const Goodbye = () => {
//     return (
//         <div>
//             <h1>ПОКА</h1>
//         </div>
//     );
// };


import React, { useState } from 'react';

const Goodbye = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your favorite flavor is: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite fruit:
        <select value={value} onChange={handleChange}>
          <option value="">Select a fruit</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Goodbye;
