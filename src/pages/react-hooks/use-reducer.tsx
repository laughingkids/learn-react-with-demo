import React, {useReducer} from "react";

type ReducerState = {
  count: number,
  showText: boolean
}

export default function UseReducerDemo() {
  const initState:ReducerState = {
    count: 0,
    showText: true
  };

  const reducer = (state:any, action:any) => {
    switch (action.type) {
    case "INCREMENT":
      return {count: state.count + 1, showText: state.showText}; 
    case "TOGGLE_SHOW_TEXT":
      return {showText: !state.showText, count: state.count}; 
    case "RESET":
      return initState; 
    default:
      return state;
    }
  };

  const [state,dispatch] = useReducer(reducer,initState);

  return (
    <div className="use-state" id="counter">
      <h1>{state.count}</h1>
      <button onClick={()=>{dispatch({type:"INCREMENT"}); dispatch({type:"TOGGLE_SHOW_TEXT"});}}> Increment </button>
      <button onClick={()=>{dispatch({type:"RESET"}); }}> reset </button>
      {state.showText && <p>This is text</p>}
    </div>
  );
}