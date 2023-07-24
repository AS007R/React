import { useState } from "react";
import React from "react";


export default function TextForm(props) {
    
    const handleUpChange=()=>{
        const newText= text.toUpperCase();
        setText(newText)
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
        // console.log("changed")
    }

     const [text, setText] = useState("Enter your text here"); 
  return (
    <>
      
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
          value={text}
          onChange={handleOnChange}
          
          
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpChange}>Convert Uppercase</button>
      </div>
    </>
  );
}
