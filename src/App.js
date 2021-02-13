import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from './actions/counter'

function App() {
  const {counter, isLoggedIn} = useSelector(state => state)
  const dispatch = useDispatch()
  return (
      <div className="App">
        <h1>counter: {counter}</h1>
        <div>
          <button onClick={() => {
            dispatch(increment())
          }}> +
          </button>
          <button onClick={() => {
            dispatch(decrement())
          }}> -
          </button>
        </div>
        {isLoggedIn ? <h1>Logged In</h1> : ''}
      </div>
  );
}

export default App;
