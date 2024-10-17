// const Congratulations = ({ firstName, lastName }) => (
//     <div>
//         You are so good, my sweetheart {firstName} {lastName}!
//     </div>
// );

import React, { useState } from 'react';
import cn from 'classnames';

const Congratulations = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);


  const btnClass = cn('btn, btn-primary');


 // const inputClass = cn({marginTop: 10});


  const handleSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

    return (
        <div>
            <h1 style={{color: 'red', fontSize: 12, marginTop: 10, marginBottom: 10}}>Сложение двух чисел</h1>
            <div style={{marginTop: 10, marginBottom: 10}}>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Введите первое число"
                />
            </div>

            <div style={{marginTop: 10, marginBottom: 10}}>
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Введите второе число"
                />
            </div>
            
            <div>
                <button className={btnClass} onClick={handleSum}>Сложить</button>
            </div>

            <div>
                {result !== null && (
                    <h2 style={{ color: 'blue' }}>Результат: {result}</h2>
                )}
            </div>

        </div>
    );
};

export default Congratulations;








// классовое представление этого компонента
/*
class SumComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: null,
    };
  }

  handleNum1Change = (e) => {
    this.setState({ num1: e.target.value });
  };

  handleNum2Change = (e) => {
    this.setState({ num2: e.target.value });
  };

  handleSum = () => {
    const { num1, num2 } = this.state;
    const sum = parseFloat(num1) + parseFloat(num2);
    this.setState({ result: sum });
  };

  render() {
    const { num1, num2, result } = this.state;

    return (
      <div>
        <h1>Сложение двух чисел</h1>
        <input
          type="number"
          value={num1}
          onChange={this.handleNum1Change}
          placeholder="Введите первое число"
        />
        <input
          type="number"
          value={num2}
          onChange={this.handleNum2Change}
          placeholder="Введите второе число"
        />
        <button onClick={this.handleSum}>Сложить</button>
        {result !== null && (
          <h2 style={{ color: 'blue' }}>Результат: {result}</h2>
        )}
      </div>
    );
  }
}
*/
