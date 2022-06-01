import React from "react";

export default function UseRefDemo() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onClick = () => {
    if(inputRef.current) {
      inputRef.current.value = "";
    }
    inputRef.current?.focus();
  };
  return (
    <div>
      <h1>test</h1>
      <input type="text" ref={inputRef} placeholder="ex..." />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}