import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  let addValue = () => {
    /*setCounter((PrevCounetr)=>PrevCounetr+1);
    setCounter((PrevCounetr)=>PrevCounetr+1);
    setCounter((PrevCounetr)=>PrevCounetr+1);
    setCounter((PrevCounetr)=>PrevCounetr+1);
    setCounter((PrevCounetr)=>PrevCounetr+1);
    */
   setCounter(counter+5);
  };

  let removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Count is {counter}</h1>
      <button id="add" onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
