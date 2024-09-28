import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from "./Greetings";
import Congratulations from "./Congratulations";
import SimpleForm from "./SimpleForm";
import Calculator from "./Calculator";

// https://habr.com/ru/companies/ruvds/articles/428077/
//const Greetings = (props) => <div>Hey you! {props.firstName} {props.lastName}!</div>;
//const Сongratulations = ({ firstName, lastName }) => <div>You are so good, my sweetheart {firstName} {lastName}!</div>;






function HiBorsy() {

  return (
    <p className="borsykun">
      Let's do business!
    </p> 
  )
}












function App() {
  const [count, setCount] = useState(0)
  const titleDom =<h4 className="card-title">Hello!</h4>;

  return (
    

    <>




  <div>
    <Greetings firstName="John" lastName="Smith" />
  </div>

  <div>
    <SimpleForm />
  </div>

  <div>
    <Calculator />
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

 



</>
    
  )
}

export default App





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
