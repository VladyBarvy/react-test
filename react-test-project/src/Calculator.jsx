import React, { useState } from 'react';

function Calculator() {
  const [R1, setR1] = useState();
  const [R2, setR2] = useState();
  const [V, setV] = useState(); // входное напряжение
  const [outputVoltage, setOutputVoltage] = useState(null); // выходное напряжение

  function calculateResistiveDivider() {
    setOutputVoltage((Number(V) * Number(R2)) / (Number(R1) + Number(R2)));
  }

  return (
    <div>
      <label>R1:</label>
      <input
        type="number"
        value={R1}
        onChange={(e) => setR1(e.target.value)}
      />
      <br />
      <label>R2:</label>
      <input
        type="number"
        value={R2}
        onChange={(e) => setR2(e.target.value)}
      />
      <br />
      <label>V:</label>
      <input
        type="number"
        value={V}
        onChange={(e) => setV(e.target.value)}
      />
      <br />
      <button onClick={() => calculateResistiveDivider()}>Рассчитать</button>
      {outputVoltage && <p>{outputVoltage}</p>}
    </div>
  );
}

export default Calculator;
