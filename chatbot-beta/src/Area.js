import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const messageFieldStyle = {
    backgroundColor: '#93B1A6',
  };
function ChatArea() {
    return (<Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '75ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          {/* Input field */}
          <TextField
            id="filled-messagearea"
            multiline
            variant="filled"
            rows={10}
            style={messageFieldStyle}
          />
        </div>
      </Box>
      );
    }

export default ChatArea;