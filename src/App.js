import './App.css';
import { useState } from 'react';
import Title from './components/title';
import Modal from './components/modal';
import EventList from './components/EventList';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: `mario birthday`, id: 1 },
    { title: `bowser's livestream`, id: 2 },
    { title: `race on the moo moo farm`, id: 3 },
  ]);

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
          <h2>Terms and Condition</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            sequi sed ullam nam rerum nesciunt consectetur magni non pariatur
            dolorum!
          </p>
          <a href='#'>find out more...</a>
        </Modal>
      )}
    </div>
  );
}

export default App;
