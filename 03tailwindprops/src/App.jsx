import Card from './Card.jsx'

function App() {
  let myObj={username:"hitesh",
    age:21
  }
  let arr=[1,2,3,4,5];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Tailwind test
      </h1>
      <Card username="chai aur react" someObj={myObj} someArr={arr} btnText="click me ❤️"/>
      <Card username="chai aur code" btnText="visit me ❤️"/>
    </>
  );
}

export default App;
