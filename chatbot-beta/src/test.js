// App.js

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ChatArea from './ChatArea';
import MultilineTextFields from './MultilineTextFields';

function App() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = () => {
    if (inputText.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, { text: inputText, type: 'user' }]);
      setInputText('');
    }
  };

  return (
    <div className="body">
      <h1 className='title'>Welcome to InteliFix Chatbot</h1>
      <div className="chat-container">
        {/* Chat area for displaying messages */}
        <ChatArea messages={messages} />

        {/* Input field */}
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '75ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-messagearea"
            multiline
            variant="filled"
            rows={4}
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <Button
            className='buttons'
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleMessageSubmit}
          >
            Send
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default App;
