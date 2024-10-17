// const Hello = () => {
//     return (
//         <div>
//             <h1>ПРИВЕТ</h1>
//         </div>
//     );
// };



import React, { useState } from 'react';

const Hello = ({ text }) => {
  const [value, setValue] = useState(text);

  return (
    <textarea value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export default Hello;
