import TextField from '@mui/material/TextField';
import './Options.css';
import './MainView.css';
import ButtonBar from '../Button/Button_Bar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiHandler from '../../ApiHandler/ApiHandler';
import Editor from "@monaco-editor/react";


const textFieldStyle = {
  marginTop: '10px',
  width: 'auto',
};

const OutputFieldStyle = {
  margin: '10px',
  width: 'auto',
  height: 'auto',
};


function MainView() {
  const [code, setCode] = useState('');
  const [comment, setComment] = useState('');
  const [codeResult, setCodeResult] = useState('');
  const [commentResult, setCommentResult] = useState('');

  const [mode, setMode] = useState('Side-by-Side'); // Default mode
  const handleModeChange = (buttonName) => {
    setMode(buttonName);
  };

  const handleButtonClick = async () => {
    try {
      const response = await ApiHandler.submitCode(code, comment);
      console.log(response);
      setCodeResult(response['data']['corrected_code']); // Assuming the response contains the result
      // setCodeResult("print(\"Hello, World!\")\ \n if 5 < 10: print(\"5 is less than 10\")");
      setCommentResult(response['data']['comment']); // Assuming the response contains the result
      console.log('result')
      console.log(codeResult);
      console.log(commentResult);
    } catch (error) {
      // console.log(error);
    }
  }


  return (
    <div className="main-container">
      <div>
        <ButtonBar handleModeChange={handleModeChange} />
      </div>

      <div className='codefixer-area'>
      <div className={`inputs ${mode !== 'Corrected' ? 'show' : 'hide'}`}>
          <Editor
            height="500px"
            language="python"
            theme="vs-dark"
            value={code}
            onValueChange={(code) => setCode(code.target.value)}
            options={{
              inlineSuggest: true,
              fontSize: "14px",
              marginBottom: "8px",
              formatOnType: true,
              autoClosingBrackets: true,
              // fi error hena 
              minimap: { scale: 10 }
            }}
          />

          <TextField
            className='input-area-2'
            id="input-area-2"
            label="Additional Info"
            multiline
            rows={2}
            variant='outlined'
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
            InputProps={{
              style: {
                color: 'white',
                // border: '1px solid white',
                backgroundColor: '#1e1e1e',

              },
            }}
            style={textFieldStyle}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            placeholder="Enter code JSON"

          />

          <button className='submit-button' onClick={handleButtonClick}>Submit</button>

        </div>

        <div className={`outputs ${mode !== 'Buggy' ? 'show' : 'hide'}`}>
        <Editor
        className='textfields'
            height="500px"
            language="python"
            theme="vs-dark"
            value={codeResult}
            onValueChange={(code) => setCode(code.target.value)}
            
            options={{
              inlineSuggest: true,
              fontSize: "14px",
              marginBottom: "8px",
              formatOnType: true,
              autoClosingBrackets: true,
              // fi error hena 
              minimap: { scale: 10 }
            }}
          />
          {/* <TextField
            className='textfields'
            id="output-area-1"
            label="Output"
            multiline
            rows={24}
            InputProps={{
              readOnly: true,
              style: {
                color: 'white',
                backgroundColor: '#1e1e1e',
                // border: '1px solid white',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'white'
              },
            }}
            style={OutputFieldStyle}
            value={codeResult}
          /> */}
        </div>

      </div>

    </div>
  );
}
export default MainView