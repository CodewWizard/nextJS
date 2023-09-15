'use client'
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("default");
  const handleClick =()=>{
      setName("madiha")
  }
  return (
    <>
      <div> 
        {name}
        <br/>
       <User name="madiha"/>
       <button onClick={handleClick}>submit</button>
      </div>
    </>
  );
}

const User=(props)=>{
  return(
    <>
      <h1>Hello world {props.name}</h1>
    </>
  )
}