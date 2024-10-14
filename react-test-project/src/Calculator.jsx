import React, { useState } from 'react';
import './Calculate.css'

// https://habr.com/ru/companies/ruvds/articles/436032/


function clearValues() {
  setR1("");
  setR2("");
  setVin("");
  setOutput("");
}




function calculate() {
    
  if (r1 === "" || r2 === "" || vin === "") {
    alert("Пожалуйста, введите все значения!");
    return;
  }

  const _r1 = parseFloat(r1);
  const _r2 = parseFloat(r2);
  const _vin = parseFloat(vin);

  if (Number.isNaN(_r1) || Number.isNaN(_r2) || Number.isNaN(_vin)) {
    alert("Все значения должны быть числами!");
    return;
  }

  const vout = (_r2 / (_r1 + _r2)) * _vin;
  setOutput(vout.toFixed(6));
}










function Calculator() {
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [vin, setVin] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div>

      <div className="forms_style_edition">
        <div>
          <label className="labelStyle">Входное напряжение Uвх</label>
        </div>
        <div>
          <input className="inputStyle" type="text" step="0.000001"  value={vin} onChange={e => setVin(e.target.value)} />

          <select className="selectStyle" name="select"  id = "input_volt">
            <option атрибуты>мВ</option>
            <option атрибуты>В</option> 
            <option атрибуты>кВ</option>
            <option атрибуты>МВ</option> 
          </select>
        </div>


        <div>
          <label className="labelStyle">Сопротивление R1</label>
        </div>
        <div>
          <input className="inputStyle" type="text" step="0.000001"  value={r1} onChange={e => setR1(e.target.value)} />

          <select className="selectStyle" name="select"  id = "resis_1">
            <option атрибуты>Ом</option>
            <option атрибуты>кОм</option> 
            <option атрибуты>МОм</option>
            <option атрибуты>ГОм</option> 
          </select>
        </div>


        <div>
          <label className="labelStyle">Сопротивление R2</label>
        </div>
        <div>
          <input className="inputStyle" type="text" step="0.000001"  value={r2} onChange={e => setR2(e.target.value)} />

          <select className="selectStyle" name="select"  id = "resis_2">
            <option атрибуты>Ом</option>
            <option атрибуты>кОм</option> 
            <option атрибуты>МОм</option>
            <option атрибуты>ГОм</option> 
          </select>
        </div>
      </div>



      

      <div>
        <button onClick={(e) => {
          e.preventDefault();
          calculate();
        }}>Рассчитать</button>

        <button onClick={(e) => {
          e.preventDefault();
          clearValues();
        }}>Очистить</button>
      </div>



      <div className="forms_style_edition">
        <div>
          <label className="labelStyle">Выходное напряжение Uвых</label>
        </div>
        <div>
        <input className="inputStyle" type="number" step="0.000001" value={output} />

        <select className="selectStyle" name="select"  id = "out_volt">
          <option атрибуты>мВ</option>
          <option атрибуты>В</option> 
          <option атрибуты>кВ</option> 
        </select>

        </div>
      </div>

    </div>
  );
}

export default Calculator;

/*
<button onClick={calculate}>Вычислить</button>
*/
