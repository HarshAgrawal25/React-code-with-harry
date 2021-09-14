import React,{useState} from 'react'

//useState is hook




export default function TextForm(props) {
    const [text, setText] = useState('');
    //setText("new text");
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLowClick = ()=>{
        console.log("uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleClearClick = ()=>{
    
        let newtext = ''
        setText(newtext);
    }
    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value);
    }
  return (
    <div>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
               
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
    </div>
    <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
    </div>
    </div>
  )
}
