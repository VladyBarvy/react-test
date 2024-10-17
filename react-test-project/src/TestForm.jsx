import React, { useState } from 'react';

const TestForm = () => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`A name was submitted: ${text}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value.toUpperCase())}
      />
      <input type='submit' value='Submit' />
    </form>
  );
};

export default TestForm;


