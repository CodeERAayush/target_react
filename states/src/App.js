import logo from './logo.svg';
import React from 'react'
import './App.css';
import sstt from './components/sstt';
function App() {
const [state, setstate] = React.useState(0);
function increment(){
  setstate(prevCount=>prevCount+1)
  }
  function dec(){
    setstate(state-1)
    }
    
  return (
      <div className="counter">
            <button className="counter--minus" onClick={dec}>–</button>
            <div className="counter--count">
                <h1>{state}</h1>
            </div>
            <button className="counter--plus" onClick={increment}>+</button>
        </div>
  );
} 

export default App;
 