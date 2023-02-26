import React, { useState } from 'react';
import rightArrow from '../assets/images/right-arrow.png';

const NewMessage = ({socket}) => {
  const [value, setValue] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit('message', value);
    setValue('');
  };

  return (
    <form onSubmit={submitForm}>
      <input 
        className="text-input-msg" 
        placeholder="Write text message here..." 
        autoFocus
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
      <input type="image" className="go-arrow" src={rightArrow} alt="Submit Form" />
    </form>
  );
};

export default NewMessage;