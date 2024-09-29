import React, { useState } from 'react';

function ResistorDividerCalculator() {
  const [resistance1, setResistance1] = useState('');
  const [resistance2, setResistance2] = useState('');
  const [inputVoltage, setInputVoltage] = useState('');
  const [outputVoltage, setOutputVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [voltageRatio, setVoltageRatio] = useState('');

  function calculate() {
    let outputVoltageValue;
    let currentValue;
    let voltageRatioValue;

    try {
      if (+resistance1 === 0 || +resistance2 === 0) {
        throw new Error("Одно из сопротивлений равно нулю");
      } else {
        const totalResistance = +resistance1 + +resistance2;
        currentValue = +inputVoltage / totalResistance;
        outputVoltageValue = +inputVoltage * resistance2 / (totalResistance * resistance1);
        voltageRatioValue = +inputVoltage * resistance2 / (totalResistance * resistance1);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setOutputVoltage(outputVoltageValue.toFixed(2));
      setCurrent(currentValue.toFixed(2));
      setVoltageRatio(voltageRatioValue.toFixed(2));
    }
  }

  return (
    <div className="calculator">
      <form>
        <label htmlFor="resistance1">Сопротивление R1:</label>
        <input type="number" value={resistance1} onChange={e => setResistance1(e.target.value)} required />
        <br />
        <label htmlFor="resistance2">Сопротивление R2:</label>
        <input type="number" value={resistance2} onChange={e => setResistance2(e.target.value)} required />
        <br />
        <label htmlFor="inputVoltage">Входное напряжение:</label>
        <input type="number" value={inputVoltage} onChange={e => setInputVoltage(e.target.value)} required />
        <br />
        <button onClick={calculate}>Рассчитать</button>
        <hr />
        <div>Выходное напряжение: {outputVoltage} В</div>
        <div>Сила тока: {current} А</div>
        <div>Коэффициент деления напряжения: {voltageRatio} В</div>
      </form>
    </div>
  );
}

export default ResistorDividerCalculator;
