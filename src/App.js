import './App.css';
import { useState } from 'react';
import Title from './components/title';
function App() {
  // console.log(useState());

  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: `mario birthday`, id: 1 },
    { title: `bowser's livestream`, id: 2 },
    { title: `race on the moo moo farm`, id: 3 },
  ]);

  console.log(showEvents);
  const handleClick = (id) => {
    console.log(id);
    // the prevEvent here assume the default value of the state before the setEvents
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
      <Title
        title='Mario Kingdom Event'
        subtitle='All the latest event in mario kingdom'
      />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide event</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show event</button>
        </div>
      )}
      {showEvents &&
        events.map((event) => {
          // const mapped = event.title;
          return (
            <div key={event.id}>
              <h2>{event.title}</h2>
              <button onClick={() => handleClick(event.id)}>delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
