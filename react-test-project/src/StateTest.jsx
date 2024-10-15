import React from 'react';
import { useState } from 'react';

let pop = 0;


const StateTest = () => {

  const [count, setCount] = useState(pop);

  const handleClick = () => {
    // Увеличиваем счётчик на 1 при нажатии кнопки
    setCount(count + 1);
    pop = count;
  };


  return (
      <div>
        <h1>ПОКА</h1>

        <div>
          <h6>Счётчик: {pop}</h6>
          <button onClick={handleClick}>Увеличить</button>
        </div>

      </div>
  );
};

export default StateTest;
