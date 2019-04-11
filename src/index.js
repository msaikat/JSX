    
// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getDefaultText() {
    return "[Please Enter Name]";
}

function getHtmlFor() {
    return "name";
}

// Create a react component
const UserInput = () => {
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';
  const buttonStyle = { backgroundColor: 'blue', color: 'white' };

  return (
    <div>
      <label className="label" htmlFor={getHtmlFor()}>
        {labelText}
      </label>
      <input id="name" type="text" defaultValue={getDefaultText()}/>
      <button style={buttonStyle}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<UserInput />, document.querySelector('#root'));