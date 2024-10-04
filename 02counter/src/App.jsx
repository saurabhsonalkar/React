import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter<20)
    {
      counter = counter + 1;
    setCounter(counter);
    }
    else{
      counter=20;
    }
  };

  const removeValue = () => {
    if (counter>0) {
      setCounter(counter-1);
    }
    else{
      counter=0;
    }
    
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
