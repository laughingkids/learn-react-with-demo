import React, { useState,useEffect } from "react";
import axios from "axios";

export default function UseEffectDemo() {
  const[data,setData] = useState("");
  useEffect(()=>{
    console.log("UseEffectDemo rendered");
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
      setData(response.data[0]?.email);
      console.log("API CALLED");
    });
  },[]);
  return <p>Hello world {data}</p>;
}