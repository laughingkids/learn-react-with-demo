import React from "react";

export type SelectorOptions = {
    value: any;
    label: string;
}
type SelectorProps = {
    defaultValue?: any;
    options: SelectorOptions[];
    selectedValue: any;
    onChangeCallback: (e: any) => void;
}

export default function Selector(props:SelectorProps) {
  const {selectedValue, options, onChangeCallback } = props;
  return (
    <select onChange={(e)=> onChangeCallback(e.target.value)}>
      {
        options.map((option)=>{
          const {value,label} = option;
          return <option key={value} value={value} selected={selectedValue===value}>{label}</option>;
        })
      }
    </select>
  );
}