import './App.css';
import { useState } from 'react';
import Title from './components/title';
import Modal from './components/modal';
import EventList from './components/EventList';
import NewEventForm from './components/newEventForm';
import MarioEvent from './components/marioEvent';
function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: `birthday ceremony for josh`, id: 1, author: `josh` },
    { title: `birthday ceremony for samuel`, id: 2, author: `mario` },
    { title: `johnson special event`, id: 3, author: `mario` },
  ]);
  // const addEvent = (event) => {
  //   setEvents((prevEvent) => {
  //     return [...prevEvent, event];
  //   });
  // };
  function addEvent(newEvent) {
    setEvents([...events, newEvent]);
  }
  const handleModal = () => {
    setShowModal(false);
  };

  function deleteClick(id) {
    console.log(id);

    setEvents(() => {
      const deleted = events.filter((event) => {
        return event.id !== id;
      });
      return deleted;
    });
  }
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
      {showEvents && <EventList events={events} handleClick={deleteClick} />}
      <br />
      <br />
      <h1> mario Event</h1>
      <EventList
        events={events.filter((event) => {
          return event.author === `mario`;
        })}
        handleClick={deleteClick}
      />

      <br />
      <br />
      <button onClick={() => setShowModal(true)}>Add new event</button>

      {/* this is for the modal component */}
      {showModal && (
        <Modal handleClick={handleModal} isSalesModal={false}>
          <NewEventForm addEvent={addEvent} handleModal={handleModal} />
        </Modal>
      )}
    </div>
  );
}

export default App;
