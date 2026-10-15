
import React from "react";
import './../styles/App.css';
import {useSelector,useDispatch} from "react-redux";

const App = () => {

  const input=useSelector((state)=>state.count.value)
  const dispatch=useDispatch()
  return (
    <div>
        {/* Do not remove the main div */}
    <h1>{input}</h1>
    <button onClick={()=>{dispatch(increment())}>Increment</button>
  <button onClick={()=>{dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App
