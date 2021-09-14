import React,{useState} from 'react'

//useState is hook




export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    //setText("new text");
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value);
    }
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
               
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    </div>
  )
}
