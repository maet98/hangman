import React from 'react';
import './App.css';
import NewWord from "./components/new_word"
import Letter from "./components/Letters"
import HangMan from "./components/HangMan"

function App() {
    const [count,setCount] = React.useState(0);

  return (
    <div className="App">
        <NewWord />
        <Letter letter={'a'} />
        <HangMan mistakes={count} />
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={() => setCount(Math.max(0,count-1))}>-</button>
        <h1>
            { count }
        </h1>
    </div>
  );
}

export default App;
