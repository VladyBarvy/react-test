import React from 'react';
import { useState } from 'react';
import Weather from './Weather.jsx';
import EmailForm from './EmailForm';
import Hello from './Hello';
import Goodbye from './Goodbye';
import './CardOne.css'

const CardOne = ( {cityName} ) => {

  let town = "Tokyo";
//class="wrapper"
  return (


    <div>

      <div >
        <div class="banner-image-1"> </div>
         <h1> {cityName} </h1> 
      </div>
 
      <div class="button-wrapper"> 
        {<Weather cityTemp={town} />} 
   
      </div> 

    </div>


  );
};



export default CardOne;





     /* <Weather cityTemp="Tokyo" /> */
