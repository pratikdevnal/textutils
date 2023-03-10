import React , {useState} from 'react'

export default function TextForm(props) {
    // handle on change
    const handleOnChange = (event)=>
    {
        setText(event.target.value)
    }
    const [text,setText] = useState("");

    //Convert To upperCase
const handleUpClick = ()=>
{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed To UpperCase", "success")
}

    //Convert To lowerCase
const handleDownClick = () =>
{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed To LowerCase", "success")
}
    //Remove Extra Spaces
const handleRemoveExtra = () =>
{
    let newText = text.split(/[ ]+/);//used regex
    setText(newText.join(" "))
    props.showAlert("Extra Space Removed", "success")
}
    // Copy to clipboard
const handleCopyClick = () =>
{
    let val = document.getElementById("myBox");
    val.select();
    // document.execCommand("copy"); this is depreciated
    navigator.clipboard.writeText(val.value);
    props.showAlert("Copied to Clipboard", "success")

}
    //Clear Text
const handleClearClick = () =>
{
    setText("")
    props.showAlert("Text cleared", "success")
}
return (
<>
<div className ={`container text-${props.mode==='dark'?'light':'dark'}`}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'}`} id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'#042743'}}></textarea>
    </div>
    
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDownClick}>Convert to LowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemoveExtra}>Remove Extra Space</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy to ClipBoard</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
    

    </div>
<div className={`container my-2 text-${props.mode==='dark'?'light':'dark'}`}>
    <h2>Your Text Summary</h2>
    <p>{text.length>0?text.split(" ").length:0} words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to Preview"}</p>
</div>    
</>

)
}
