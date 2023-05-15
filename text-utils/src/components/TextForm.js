import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert('Converted to UpperCase', 'success');
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText); 
        props.showAlert('TextBox cleared', 'success');
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text copied to clipboard', 'success');
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        props.showAlert('Converted to LowerCase', 'success');
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra Space Removed', 'success');
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea 
                    className="form-control" 
                    id="myBox" 
                    value={text} 
                    onChange={ handleOnChange } 
                    rows="8"
                    style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'light' ? 'black' : 'white'}}
                ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={ handleUpClick }>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={ handleLoClick }>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={ handleClearClick }>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={ handleCopy }>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={ handleExtraSpaces }>Handle Extra Spaces</button>
        </div>
        <div className="container my-4" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text: 'Enter something to preview here'}</p>
        </div>
        </>
    )
}

TextForm.propTypes = { 
    heading: PropTypes.string.isRequired,
}

TextForm.defaultProps = {
    heading: 'Set title here',
}