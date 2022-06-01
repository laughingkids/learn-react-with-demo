import React,{useLayoutEffect,useEffect, createRef} from "react";

export default function UseLayoutEffectDemo() {
  const inputRef = createRef<HTMLInputElement>();
  useEffect(() => {
    console.log("use effect");
    if(inputRef.current) {
      inputRef.current.value="Hello";
    }
  }, []);
  useLayoutEffect(() => {
    console.log("use layout effect");
    console.log(inputRef.current?.value);
  }, []);
  return <div>
    <input ref={inputRef} value="Laughingkids"/>
  </div>;
}