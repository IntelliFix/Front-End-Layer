import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ChatArea from './Chatbot_OutputArea';

function MultilineTextFields() {

    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);
  
    const handleAskClick = () => {
      if (inputText.trim() !== '') {
        setMessages((prevMessages) => [...prevMessages, { text: inputText, type: 'user' }]);
        setInputText('');
      }
    };

    const handleAnswerClick = () => {
      if (inputText.trim() !== '') {
        setMessages((prevMessages) => [...prevMessages, { text: inputText, type: 'ai' }]);
        setInputText('');
      }
    };

    // const handleAskClick = (messageType) => {
    //   if (inputText.trim() !== '') {
    //     setMessages((prevMessages) => [...prevMessages, { text: inputText, type: messageType }]);
    //     setInputText('');
    //   }
    // };
  
    const textFieldStyle = {
      backgroundColor: '#93B1A6',
    };
  
    const buttonStyle = {
      margin: '10px',
    };
  
    return (
        
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '75ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <ChatArea messages={messages}
        />
        </div>
        <div>
          {/* Input field */}
          <TextField
            id="filled-textarea"
            label="Ask anything..."
            placeholder="ex: what's AI?"
            multiline
            rows={3}
            variant="filled"
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
          onClick={handleAskClick}
        >
          Ask
        </Button>
        <Button
          className='buttons'
          variant="contained"
          endIcon={<SendIcon />}
          style={buttonStyle}
          onClick={handleAnswerClick}
        >
          AI
        </Button>
      </Box>
    );
  }

export default MultilineTextFields;