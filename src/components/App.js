
import React from "react";
import './../styles/App.css';

const App = () => {

  const input=useSelector((state)=>state.count.value)
  const dispatch=useDispatch()
  return (
    <div>
        {/* Do not remove the main div */}
    <p>{input}</p>
    <button onClick={()=>{dispatch(increment())}>Increment</button>
  <button onClick={()=>{dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App
