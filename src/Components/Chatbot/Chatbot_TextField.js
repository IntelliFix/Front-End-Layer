import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ChatArea from './Chatbot_OutputArea';
import './Chatbot.css';
import ApiHandler from '../../ApiHandler/ApiHandler';



function MultilineTextFields() {

    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);

    const handleClick = async () => {
        try {
            if (inputText.trim() !== '') {
                setMessages((prevMessages) => [...prevMessages, { text: inputText, type: 'user' }]);
                setInputText('');

                const response = await ApiHandler.submitMessage(inputText);
                const responseData = response.data.output;

                setMessages((prevMessages) => [...prevMessages, { text: responseData, type: 'ai' }]);
                console.log(responseData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const textFieldStyle = {
        backgroundColor: '#EDEDED',
        borderRadius: '10px',
        border: 0,
        outline: 0,
        width: '450px',
    };

    const buttonStyle = {
        backgroundColor: '#393E46',
        margin: '10px',
    };

    return (
        // <div className='chatbot'>
        //     <div>
        //         <ChatArea messages={messages} />
        //     </div>
        //     <div className='chat-input-holder' >
        //         <textarea
        //             rows='1'
        //             className='chat-input-textarea'
        //             placeholder='Type your question...' >
        //         </textarea>
        //     </div>
        // </div>


        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '75ch' },
            }}
            noValidate
            autoComplete="off">

            <div>
                <ChatArea messages={messages} />
            </div>
            <div>
                {/* Input field */}
                <TextField
                    className='chat-input-area'
                    id="filled-textarea"
                    label="Ask anything..."
                    placeholder="ex: what's AI?"
                    multiline
                    rows={1}
                    variant="outlined"
                    InputProps={{
                        style: textFieldStyle,
                    }}
                    style={textFieldStyle}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
            </div>
            <Button
                className='buttons'
                variant="contained"
                endIcon={<SendIcon />}
                style={buttonStyle}
                onClick={handleClick}>
                Ask
            </Button>
        </Box>
    );
}

export default MultilineTextFields;