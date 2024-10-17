import React from "react";

// const Greetings = ({ firstName, lastName, resistanceOne }) => (
//     <div>
//         Hey you! {firstName} {lastName}!
//         <div>{resistanceOne}</div>
//     </div>
// );


const Greetings = () => {
    const [selectedRadio, setSelectedRadio] = React.useState('');
    const [checkedParis, setCheckedParis] = React.useState(false);
    const [checkedLondon, setCheckedLondon] = React.useState(false);
  
    return (
      <div>
        <form>
          <label>
            <input
              type="radio"
              name="city"
              value="Токио"
              onChange={(e) => setSelectedRadio(e.target.value)}
            />
            Токио
          </label>
          {selectedRadio === 'Токио' && <p style={{ color: 'blue' }}>Токио</p>}
  
          <br />
  
          <label>
            <input
              type="radio"
              name="city"
              value="Москва"
              onChange={(e) => setSelectedRadio(e.target.value)}
            />
            Москва
          </label>
          {selectedRadio === 'Москва' && <p style={{ color: 'blue' }}>Москва</p>}
  
          <hr />
  
          <label>
            <input type="checkbox" name="country" value="Париж" onChange={(e) => setCheckedParis(e.target.checked)} />
            Париж
          </label>
          {checkedParis && <p>Париж</p>}
  
          <br />
  
          <label>
            <input type="checkbox" name="country" value="Лондон" onChange={(e) => setCheckedLondon(e.target.checked)} />
            Лондон
          </label>
          {checkedLondon && <p>Лондон</p>}
        </form>
      </div>
    );
  };

export default Greetings;
