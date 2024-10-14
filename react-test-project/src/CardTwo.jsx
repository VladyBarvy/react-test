import React from 'react';
import { useState } from 'react';
import Weather from './Weather.jsx';
import EmailForm from './EmailForm';
import Hello from './Hello';
import Goodbye from './Goodbye';
import './CardTwo.css'

const CardTwo = ( {cityName} ) => {

  const town = 'Saint%20Petersburg';

  return (


    <div>

      <div class="wrapper">
        <div class="banner-image"> </div>
         <h1> {cityName} </h1> 
      </div>
 
      <div class="button-wrapper"> 
        {<Weather cityTemp={town} />} 
   
      </div> 

    </div>


  );
};



export default CardTwo;





     /* <Weather cityTemp="Tokyo" /> */
