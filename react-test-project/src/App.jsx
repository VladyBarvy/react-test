import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from "./Greetings";
import Congratulations from "./Congratulations";
import SimpleForm from "./SimpleForm";
import Calculator from "./Calculator";
import ResistorDividerCalculator from "./ResistorDividerCalculator"
import InputForm from "./InputForm"
import Borsy from "./Borsy";
import Weather from './Weather';
import EmailForm from './EmailForm';
import Hello from './Hello';
import Goodbye from './Goodbye';
import CardOne from './CardOne.jsx';
import CardTwo from './CardTwo.jsx';


// https://habr.com/ru/companies/ruvds/articles/428077/
//const Greetings = (props) => <div>Hey you! {props.firstName} {props.lastName}!</div>;
//const Сongratulations = ({ firstName, lastName }) => <div>You are so good, my sweetheart {firstName} {lastName}!</div>;





/*
const HiBorsy = ({firstName}) => {

  <div>
     Let's do business, {firstName}!
  </div>
  
}


const Greetings = ({ firstName, lastName, resistanceOne }) => (
  <div>
      Hey you! {firstName} {lastName}!
      <div>{resistanceOne}</div>
  </div>
);

*/



//const vdom = <Borsy>some text</Borsy>;


// WeatherAPI Key: 1534fae249c04858b82121313241410


// https://www.weatherapi.com/





function App() {

  const [state, setState] = useState('Токио');

  // const [count, setCount] = useState(0)
  // const titleDom =<h4 className="card-title">Hello!</h4>;

  // const [page, setPage] = useState(1); // 1 — первая страница, 2 — вторая страница


  return (
    

    <>
      
      <div class="container">
        <h1 className="boberNoid">City-Weather</h1>
        {state === 'Токио' ?  <CardOne cityName="Токио" /> : <CardTwo cityName="Санкт-Петербург" />}    
        <button onClick={() => state === 'Токио' ? setState('Санкт-Петербург') : setState('Токио')}>Другой город</button>
      </div>




    </>
    
  )
}

export default App







































    /* <div>
      <Weather />
    </div> */


    /* <div>
      <EmailForm />
    </div> */












    

/*
    <button onClick={() => setPage(2)}>Перейти на вторую страницу</button>

    {page === 2 && (
      <div>
        
        <button onClick={() => setPage(1)}>Вернуться на первую страницу</button>
      </div>
    )}
*/














  /* <button class="btn outline">DETAILS</button>
  <button class="btn fill">BUY NOW</button> */




















/*
            <div>
              <ResistorDividerCalculator />
            </div>
            */

















/*     
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
      
*/



















/*
  <div>
    <Greetings firstName="John" lastName="Smith" />
  </div>

  <div>
    <SimpleForm />
  </div>

  <div className="card">
    <div className="card-body">
       Hi!
      {titleDom}
    </div>
  </div>

  <div className="card">
    <Congratulations firstName="Borsy" lastName="kun" />
  </div>

  <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p> 

  <div>
    <button onClick={() => <HiBorsy />}>Biarsu</button>
  </div>

  */







  /* 
    <div class="header-h1">
      <h1 class="change-text">РЕЗИСТИВНЫЙ ДЕЛИТЕЛЬ НАПРЯЖЕНИЯ</h1>
    </div>

    <table  class ="table">  
      <tr>
        <th align="center">  
          <form id="form">

            <div>
              <Calculator />
            </div>

            <div>
              <Borsy>some text</Borsy>
            </div>

          </form>
        </th>
      </tr>
    </table> */






  /* <CardOne cityName="Токио" />  */
