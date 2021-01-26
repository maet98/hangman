import React from 'react';
import './App.css';
import Word from "./components/Word"
import HangMan from "./components/HangMan"

function App() {
    const [count,setCount] = React.useState(0);

    const won = () => {
        alert("You won");
    }

    const increase = () => {
        if(count+1 == 11) {
            alert("You lost")
        }
        else {
            setCount(count + 1)
        }
    }


  return (
      <div className="App">
        <Word won={won} increase={increase} word={"HOLAMIMA"} />
        <HangMan mistakes={count} />
    </div>
  );
}

export default App;
