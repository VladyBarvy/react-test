import React, { useState } from 'react';
import Greetings from "./Greetings";
import simpleform_style from './simpleform_style';
import TextField from './TextField';

const SimpleForm = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [resistanceOne, setResistanceOne] = useState('');

  const validateName = (name) => {
    const regex = /[A-Za-z]{3,}/;

    return !regex.test(name)
      ? "The name must contain at least three letters. Numbers and special characters are not allowed."
      : '';
  };

  const onFirstNameBlur = () => {
    const errorMessage = validateName(firstName);
    
    if (errorMessage === '') {
      setFirstNameError('');
    } else {
      setFirstNameError(errorMessage);
    }
  };

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };



  const onLastNameBlur = () => {
    const errorMessage = validateName(lastName);
    
    if (errorMessage === '') {
      setLastNameError('');
    } else {
      setLastNameError(errorMessage);
    }
  };

  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  };


  const onResistanceOneChange = (event) => {
    setResistanceOne(event.target.value);
  };

  return (


    <div style={simpleform_style.form}>
      <TextField 
        name="firstName"
        label="First name:"
        onChange={onFirstNameChange}
        onBlur={onFirstNameBlur}
         error={firstNameError} 
      />

    <TextField 
      name="lastName"
      label="Last name:"
      onChange={onLastNameChange}
      onBlur={onLastNameBlur}
      error={lastNameError} 
    />

    




    <Greetings firstName={firstName} lastName={lastName} />






    <div>
    <TextField 
        name="resistanceOne"
        label="R1:"
        onChange={onResistanceOneChange}

      />
  </div>

  <Greetings resistanceOne={resistanceOne} />







  </div>












  );
};

export default SimpleForm;


    /*
    <div>
      <div>
        <label>
          First name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={onFirstNameChange}
            onBlur={onFirstNameBlur}
          />
          {firstNameError && <div>{firstNameError}</div>}
        </label>
      </div>

      <Greetings
        firstName={firstName}
      />
    </div>
  */


    /*
    
<div style={{margin: 50, padding: 10, width: 300, border: "1px solid black", backgroundColor: "black", color: "white"}}>
<div style={{marginBottom: 10}}>
<label>
  First name:
  <input
    style={{backgroundColor: '#EFEFFF', marginLeft: 10}}
    type="text"
    name="firstName"
    onChange={this.onFirstNameChange}
    onBlur={this.onFirstNameBlur}
  />
  {firstNameError && <div style={{color: 'red', margin: 5}}>{firstNameError}</div>}
</label>
</div>

<Greetings
firstName={firstName}
/>
</div>
*/












/*
    <div style={simpleform_style.form}>
      <div style={simpleform_style.inputGroup}>
        <label>
          First name:
          <input
            style={{backgroundColor: '#EFEFFF', marginLeft: 10}}
            type="text"
            name="firstName"
            value={firstName}
            onChange={onFirstNameChange}
            onBlur={onFirstNameBlur}
          />
          {firstNameError && <div style={simpleform_style.error}>{firstNameError}</div>}
        </label>
      </div>



      <div style={simpleform_style.inputGroup}>
          <label>
            Last name:
            <input
              style={simpleform_style.input}
              type="text"
              name="lastName"
              onChange={onLastNameChange}
              onBlur={onLastNameBlur}
            />
            {lastNameError && <div style={simpleform_style.error}>{lastNameError}</div>}
          </label>
      </div>

      

      <Greetings
        firstName={firstName}
      />
    </div>
      */
