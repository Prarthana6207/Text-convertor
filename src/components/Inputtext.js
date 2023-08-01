import React, {useState} from 'react';

export default function Inputtext(props) {
  const[text, setText] = useState("");
  const handleupClick = ()=>{
    
      let newText = text.toUpperCase();
      setText(newText);
  }

  const handleloClick = ()=>{
    
    let newText = text.toLowerCase();
    setText(newText);
}

  const handleonChange = (event) =>{
    setText(event.target.value)
  }

  const handleReplace = ()=>{
    let replaceFrom = prompt("which word you want to replace?");
    let replaceWith = prompt("from which word you want to replace")
    let newText = text.replaceAll(replaceFrom,replaceWith);
    setText(newText);
  }

  const handleClear = ()=>{
    let newText = ''
    setText(newText);
  }
  const handleReverseText = ()=>{
    let split = text.split("")
    let reverseText = split.reverse();
    let newText = reverseText.join("")
    setText(newText);
  }
  const copyText = () =>{
    navigator.clipboard.writeText(text);
   }
  

  return (
    <div className="form-group my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" value = {text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'#615C5C':'white',color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  

  <button className="btn btn-primary mx-2" onClick={handleupClick}>convert to uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleloClick}>conver into lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleReplace}>Replace with</button>
  <button className="btn btn-primary mx-2" onClick={copyText}>copy text</button>
  <button className="btn btn-primary mx-2" onClick={handleReverseText}>Reverse text</button>
  <button className="btn btn-primary mx-2" onClick={handleClear}>Clear all</button>

  <div className="container">
    <h2>your text summary</h2>
    <p>{text.length===0?0:text.split(" ").length} words and {text.length} character</p>
     <p> {0.008 *text.split(" ").length} minutes read</p>
      <h3>Preview</h3>
      <p > {text.length>0?text:"Enter something to preview it here"}</p>
  </div>
  </div>
  )
}

