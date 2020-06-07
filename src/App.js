import React from 'react';
import Board from './Components/Board';
import Element from './Components/Element';
// import './App.css';
function App() {
  return (
    <div className="App">
      <main className='flexbox'>
      <Board id='b-1' className='b'>
      <h3>Tasks</h3>
      <Element id='e-1' className='element' draggable='true'>
      <p>Element #1.1</p>
      </Element>
      <Element id='e-11' className='element' draggable='true'>
      <p>Element #1.2</p>
      </Element>
      <Element id='e-12' className='element' draggable='true'>
      <p>Element #1.3</p>
      </Element>
      </Board>
      <Board id='b-2' className='b'>
      <h3>To Do</h3>
      <Element id='e-2' className='element' draggable='true'>
      <p>Element #2</p>
      </Element>
      </Board>
      <Board id='b-3' className='b'>
      <h3>In the Process</h3>
      <Element id='e-3' className='element' draggable='true'>
      <p>Element #3</p>
      </Element>
      <Element id='e-31' className='element' draggable='true'>
      <p>Element #3.1</p>
      </Element>
      </Board>
      <Board id='b-4' className='b'>
      <h3>Done</h3>
      <Element id='e-4' className='element' draggable='true'>
      <p>Element #4.1</p>
      </Element>
      <Element id='e-41' className='element' draggable='true'>
      <p>Element #4.2</p>
      </Element>
      <Element id='e-42' className='element' draggable='true'>
      <p>Element #4.3</p>
      </Element>
      </Board>
      </main>
    </div>
  );
}
export default App;