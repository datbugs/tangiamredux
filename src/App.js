import React from 'react';
import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import { upNumber,downNumber, resetNumber } from './action';
function App() {
const dispatch = useDispatch()
const count = useSelector(state => state.value)
  return (
    <div className="App">
      <h1>demo react redux</h1>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(upNumber)}>Tang</button>
      <button onClick={()=>dispatch(downNumber)}>Giam</button>
      <button onClick={()=>dispatch(resetNumber)}>Reset</button>

    </div>
  );
}

export default App;
