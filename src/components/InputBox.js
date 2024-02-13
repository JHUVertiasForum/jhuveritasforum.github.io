import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SubmitText(text, navigate) {
    axios.post('https://sikf2b5a6j.execute-api.us-east-1.amazonaws.com/v1', {
        body: text,
        headers : {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(function (response) {
        console.log(response);
        navigate('/responses');
    })
    .catch(function (error) {
        console.log(error);
    });
}

function InputBox() {
  const navigate = useNavigate();

  return (
    <div className='text-width'>
        <input className="chat-box chatbox-fade-in" type="text" />
        <button className="submit-button chatbox-fade-in" onClick={() => SubmitText(document.querySelector('.chat-box').value, navigate)}>Submit</button>
    </div>
  );
}

export default InputBox;