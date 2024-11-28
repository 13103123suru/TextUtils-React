import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function Formf(props) {
  const rev=()=>{
    let reve="";
    for(let i=text.length-1;i>=0;i--){
      reve+=text.charAt(i);
    }
    setText(reve);
    props.usealert("Reverse successfully","Success")
  }
  const copy=()=>{
      var text=document.getElementById("mytext");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.usealert("Copied successfully","Success")
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.usealert("Speaking start","Success")
  }
  const handleUp=()=> {
    setText(text.replace(/\.\s+([a-z])[^\.]|^(\s*[a-z])[^\.]/g, s => s.replace(/([a-z])/,s => s.toUpperCase())));
    props.usealert("Converted into Sentance  successfully","Success")
  }
  const handleCapitize=()=>{
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
     setText(newText);
     props.usealert("Capitize successfully","Success")
    
  }
  const handleClear=()=>{
    
    setText("");
    props.usealert("Clear successfully","Success")
  }
  const extraspace=()=>{
    let ntext=text.split(/\s+/).join(" ");
    setText(ntext);
    props.usealert("Extraspace is clear successfully","Success")
  }
  const textL=()=>{
    let ntext=text.split(/\s+/).join("");
    return ntext.length;
  }
  const handleLo=()=>{
    console.log("");
    let nc=text.toLowerCase();
    setText(nc);
    props.usealert("Lowercase successfully","Success")
  }
  const Onchangehandle=(event)=>{
    //console.log("On Change");
    setText(event.target.value);
    
  }
const [text,setText]=useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h1 >Enter your text to analize</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode=='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={Onchangehandle} id="mytext" rows="8" ></textarea>
  <div>
  <button className="btn btn-primary mx-2" onClick={handleUp} >Convert in Sentance</button>
  <button className="btn btn-primary mx-2" onClick={handleLo} >Convert in LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
  <button className="btn btn-primary mx-2" onClick={handleCapitize}>Capitalize</button>
  <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
  <button className="btn btn-primary mx-2" onClick={copy}>Copy</button>
  <button className="btn btn-primary mx-2" onClick={extraspace}>RemoveExtraSpaces</button>
  <button className="btn btn-primary mx-2" onClick={rev}>Reverse</button>
  </div>
</div>
    </div>
    
    <div className="container"style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Summary</h2>
      <p>{text.split(" ").length-1} words and {textL()}Charecters</p>
      <div>{0.008 *text.split(" ").length} <b>Time requred for read</b></div>
      <h2>Preview</h2>
      <div><p>{text}</p></div>
    </div>
    </>
  )
}
