import { useState } from "react";
import React from "react";


export default function TextForm(props) {
    
    const handleUpChange=()=>{
        const newText= text.toUpperCase();
        setText(newText)
    }
    const handleRvsChange=()=>{
        const newText= text.split('').reverse().join('');
        setText(newText)
    }
    const handlefncChange=()=>{
      const fancyCharacters = {
        a: '阿', b: '卜', c: '川', d: '刀', e: '儿', f: '发', g: '丐', h: '厂', i: '讥', j: '丌',
        k: '开', l: '力', m: '呒', n: '那', o: '哦', p: '丕', q: '去', r: '人', s: '仨', t: '他',
        u: '讨', v: '夕', w: '乌', x: '夕', y: '夜', z: '乍', A: '阿', B: '八', C: '川', D: '冬',
        E: '诶', F: '非', G: '戈', H: '汉', I: '井', J: '丌', K: '开', L: '了', M: '么', N: '嗯',
        O: '哦', P: '丕', Q: '去', R: '人', S: '丝', T: '他', U: '讨', V: '夕', W: '夕', X: '夕',
        Y: '夜', Z: '蚱',
        ' ': ' ', '.': '。', '!': '！', '?': '？'
        // Add more characters as needed to extend the fancy text options
      };
    
      let fancyText = '';
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        fancyText += fancyCharacters[char] || char;
      }
    
      // return fancyText;
        // const newText= text.split('').reverse().join('');
        setText(fancyText)
    }
    const handleLoChange=()=>{
        const newText= text.toLowerCase();
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
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpChange}>Convert Uppercase</button>
        <button className="btn btn-danger my-3 mx-1" onClick={handleLoChange}>Convert Lowercase</button>
        <button className="btn btn-danger my-3 mx-1" onClick={handleRvsChange}>Reverse The Text</button>
        <button className="btn btn-warning my-3 mx-1" onClick={handlefncChange}>Convert to chinese</button>
      </div>
      <div>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <h2>Preview text</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
