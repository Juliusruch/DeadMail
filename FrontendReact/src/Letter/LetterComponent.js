import React, { useState } from 'react';
import letterImage from './letter.png'
import './letter.css'
function LetterComponent()
{
    const [message, setMessage] = useState('');
    const [adress, setAdress] = useState('');
    const [responseMessage, setResponseMessage] = useState('Placeholder');

    const sendLetter = async () => {
        const data = {adress, message};
        try {
            const response = await fetch("http://localhost:5000/api/sendLetter", {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                },
                body: JSON.stringify(data),

            });

            if (response.ok)
            {
                const result = await response.json();
                setResponseMessage(result);
            }

        }
        catch (error)
        {
            setResponseMessage("An Error Occured")
        }

    }



    return (
        <div className="letter-container">
            <img src={letterImage} className='background-image' alt='Logo'></img>
            <div className='overlay-content'>
                <input type='text' id='AdressInput' placeholder='Address' onChange={(e) => setAdress(e.target.value)}></input>
                <input type='text' id='MessageInput' placeholder='Message' onChange={(e) => setMessage(e.target.value)}></input>
                <h1>{responseMessage}</h1>
                <button onClick={sendLetter}>Send Letter</button>
            </div>
            
        </div>
    )

}

export default LetterComponent