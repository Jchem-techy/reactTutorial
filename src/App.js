import './App.css';
import { useState } from 'react';
function App() {
  // console.log(useState());

  const [events, setEvents] = useState([
    { title: `mario birthday`, id: 1 },
    { title: `bowser's livestream`, id: 2 },
    { title: `race on the moo moo farm`, id: 3 },
  ]);
  const handleClick = (id) => {
    console.log(id);
    // the prevState here assume the default value of the state before the setEvents
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        if (event.id !== id) {
          return event;
        }
      });
    });
  };
  return (
    <div className='App'>
      {events.map((event) => {
        const mapped = event.title;
        return (
          <div key={event.id}>
            <h2>{mapped}</h2>
            <button onClick={() => handleClick(event.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
