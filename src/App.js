import './App.css';
import React , { useState } from 'react'
import data from './data';
import Tour from './components/Tour';

function App() {

  const [tours ,setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour=>tour.id!==id);
      setTours(newTours);
  }

  if(tours.length===0){
    return(
      <div className='refresh'>
        <h3>
          Nothing is Here
        </h3>
        <button className='btn' onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="App">
      <Tour tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
