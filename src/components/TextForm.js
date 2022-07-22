import React, {useState} from "react";

export default function TextForm(props) {
    const handleUcClick = ()=>{
        // console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
        // document.title='Textutils - UpperCase'
    }
    const handleLcClick = ()=>{
        // console.log('Lowercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
        // document.title='Textutils - LowerCase'
    }
    
    const handleClearText = ()=>{
        // console.log('Clear Text was clicked' + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text has been cleared", "success")
        // document.title='Textutils - Text cleared'
    }
    const handleCapCase = ()=>{
        // console.log('Capitalcase was clicked' + text);
        let words = text.split(" ")
        let uppercaseword = ''
        words.forEach(Element =>{
            uppercaseword+=Element.charAt(0).toUpperCase()+Element.slice(1)+" "
        });
        setText(uppercaseword)
        props.showAlert("Converted to CapitalCase", "success")
        // document.title='Textutils - CapitalCase'
    }
    // const toCapitalize = () => {
    //     const cap = text.split(" ");
    //     let ss = "";
    
    //     cap.forEach((element) => {
    //       ss +=
    //         element.replace(
    //           element.charAt(0),
    //           element.charAt(0).toUpperCase()
    //         ) + " ";
    //         setText(ss);
    //     });
    //   };

    // fumction to capitalise the first character of any string
    // const Capitalize = () => {
    //     let FirstCharacter = text.charAt(0); //to pick the first character of any word/string
    //     let newText = FirstCharacter.toUpperCase(); //Converting that to uppercase
    //     setText(newText + text.slice(1)); //printing it with the rest excluding first character

    // } //wrong

    const handleOnChange = (event)=>{
        // console.log('On Change');
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("my box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to Clipboard", "success")
        // document.title='Textutils - Copied to CLipboard'

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces were removed", "success")
        // document.title='Textutils - Extra space removed'

    }

    const [text, setText] = useState('Enter text here');
    // text = "new text";  //wrong way to change the state
    // setText = ("new text");   //wright way to change the state
  return (
    <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h1 > {props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          style = {{backgroundColor: props.mode==='dark'?'#9097af':'white', color: props.mode==='dark'?'white':'black' }}
          value={text}
          onChange={handleOnChange}
          id="my box"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUcClick}>Convert to UPPERCASE</button>
      <button className="btn btn-primary mx-2" onClick={handleLcClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCapCase}>Convert to CapitalCase</button>
      {/* <button className="btn btn-primary mx-2" onClick={Capitalize}>Convert to CapitalCase</button> */}
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
      <h2 className="container">Text summary</h2>
      <p className="container">{text.split(" ").length} Words and {text.length} Characters</p>
    </div>
  );
}
