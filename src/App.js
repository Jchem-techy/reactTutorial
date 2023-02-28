import './App.css';
import { useState } from 'react';
function App() {
  // console.log(useState());
  const [name, setName] = useState(`mario`);
  // the first element(name) is the actual state value i.e the default value passed into the useState method in this case (mario)
  const handleClick = () => {
    // since we want the name to respond to an eventlistener we setup the function here
    setName(`luigi`);
    console.log(name);
  };
  return (
    <div className='App'>
      <h1>{name}</h1>
      <button onClick={handleClick}>change Name</button>
    </div>
  );
}

export default App;
