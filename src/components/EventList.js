import React from 'react';
import styles from './EventList.module.css';
export default function EventList({ events, handleClick }) {
  return events.map((event) => {
    return (
      <div key={event.id} className={styles.card}>
        <h2>{event.title}</h2>
        <button onClick={() => handleClick(event.id)}>delete</button>
      </div>
    );
  });
}
