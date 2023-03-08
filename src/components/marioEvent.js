import React from 'react';
// import styles from './EventList.module.css';
function MarioEvent({ events, handleClick }) {
  console.log(events);
  const mapped = events.map((event) => {
    return (
      <div key={event.id}>
        <h2>{event.title}</h2>
        <button onClick={() => handleClick(event.id)}>delete</button>
      </div>
    );
  });
  return mapped;
}

export default MarioEvent;
