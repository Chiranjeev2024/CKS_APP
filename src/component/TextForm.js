import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase Was Clicked:f" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
    //     console.log("On Change");
        setText(event.target.value)
    }


    const [text, setText] = useState("Enter Text Here2")
    // text = "new text";  // wrong way to change the state
    // setText("new text"); //correct way to change the state


  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control border-3 border-primary-subtle" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>

    </div>
  )
}
