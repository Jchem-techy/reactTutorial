import './App.css';
import { useState } from 'react';
import Title from './components/title';
import Modal from './components/modal';
import EventList from './components/EventList';
import NewEventForm from './components/newEventForm';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);
  const addEvent = (event) => {
    setEvents((prevEvent) => {
      return [...prevEvent, event];
    });
  };
  const handleModal = () => {
    setShowModal(false);
  };

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
      {/* {events.map((event) => {
        if (event.id === 1) {
          return <h1>{event.title}</h1>;
        }
      })} */}
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
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      <br />
      <br />
      <button onClick={() => setShowModal(true)}>showModal</button>
      {/* this is for the modal component */}
      {showModal && (
        <Modal handleClick={handleModal} isSalesModal={false}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
    </div>
  );
}

export default App;
