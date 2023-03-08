import React, { useState } from 'react';
import './NewEventForm.css';
function NewEventForm({ addEvent, handleModal }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  function handleChange(e) {
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
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type='date'
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </label>
      <button type='submit' onClick={handleModal}>
        submit
      </button>
      <p>
        title-{title} and date-{date}
      </p>
      <p onClick={resetForm}>reset the form</p>
    </form>
  );
}

export default NewEventForm;
