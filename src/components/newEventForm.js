import React, { useState } from 'react';
import './NewEventForm.css';
function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  function handleChange(e) {
    // console.log(e.target.value);
    setTitle(e.target.value);
  }
  function resetForm() {
    setDate('');
    setTitle('');
  }
  function handleSubmit(e) {
    e.preventDefault();
    let event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000),
    };

    addEvent(event);
    resetForm();
  }
  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type='text'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
      </label>
      <label>
        <span>Event Data:</span>
        <input
          type='date'
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={title}
        />
      </label>
      <button type='submit'>submit</button>
      <p>
        title-{title} and date-{date}
      </p>
      <p onClick={resetForm}>reset the form</p>
    </form>
  );
}

export default NewEventForm;
