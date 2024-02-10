import React from 'react';
import axios from 'axios';

function submitText(text) {
    
    axios.post('https://sikf2b5a6j.execute-api.us-east-1.amazonaws.com/v1', {
        body: text,
        headers : {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}


class InputBox extends React.Component {
  // Your existing code here...

  render() {
    return (
        <div className='text-width'>
            <input className="chat-box chatbox-fade-in" type="text" />
            <button className="submit-button chatbox-fade-in" onClick={() => submitText(document.querySelector('.chat-box').value)}>Submit</button>
        </div>
    );
  }
}

export default InputBox;