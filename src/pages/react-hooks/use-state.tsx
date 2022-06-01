import React, {useState} from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="use-state" id="counter">
      <h1>{counter}</h1>
      <button onClick={()=>{setCounter(counter+1);}}> Increment </button>
    </div>
  );
}

function Input() {
  const [inputValue, setInputValue] = useState();
  const inputOnchangeCallback = (event:any) => setInputValue(event.target.value);
  return (
    <div className="use-state" id="input">
      <h1>The user name your are typing is {inputValue}</h1>
      <input value={inputValue} onChange={inputOnchangeCallback} placeholder="typing something"/>
    </div>
  );
}

export default function UseStateDemo() {
  return (
    <div className="use-state">
      {Counter()}
      {Input()}
    </div>
  );
}