import TextField from '@mui/material/TextField';
import './Options.css';
import ButtonBar from '../Button/Button_Bar';
import { colors } from '@mui/material';
import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiHandler from '../../ApiHandler/ApiHandler';
import codeeditor from '../Editor/Editor';
import Editor from "@monaco-editor/react";


const textFieldStyle = {
  margin: '8px',
  width: '400px',
};


function MainView() {
  const [code, setCode] = useState('');
  const [comment, setComment] = useState('');
  const [codeResult, setCodeResult] = useState('');
  const [commentResult, setCommentResult] = useState('');



  const handleButtonClick = async () => {
    try {

      const response = await ApiHandler.submitCode(code, comment);
      console.log(response);
      setCodeResult(response['data']['corrected_code']); // Assuming the response contains the result
      setCommentResult(response['data']['comment']); // Assuming the response contains the result
      console.log('result')
      console.log(codeResult);
      console.log(commentResult);
    } catch (error) {
      console.log(error);
    }
  }




  return (
    <div className="main-container">
      <div className='views'>
        <button>Buggy</button>
        <button>Side-by-Side</button>
        <button>Corrected</button>
      </div>
      <div>
        <ButtonBar />
      </div>

      <div className='codefixer-area'>
        <div className='inputs'>
          {/* <TextField
            focused
            color='secondary'
            className='textfields'
            id="input-area-1"
            label="Input Code"
            multiline
            rows={10}
            InputProps={{
              style: {
                color: 'white',
                // border: '1px solid white',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
            style={textFieldStyle}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter code JSON"

          /> */}

          <Editor
            height="280px"
            language="python"
            theme="vs-dark"
            value={code}
            // onChange={(e) => setCode(e.target.value)}
            options={{
              inlineSuggest: true,
              fontSize: "16px",
              formatOnType: true,
              autoClosingBrackets: true,
              minimap: { scale: 10 }
            }}
          />

          <TextField
            className='textfields'
            id="input-area-2"
            label="Additional Info"
            multiline
            rows={4}
            variant='filled'
            margin='10px'
            PaperProps={{
              style: {
                margin: '10px'
              }
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
            InputProps={{
              style: {
                color: 'white',
                border: '1px solid white',
                backgroundColor: '#393E46',
              },
            }}
            style={textFieldStyle}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            placeholder="Enter code JSON"

          />
        </div>

        <div className='outputs'>
          <TextField
            focused
            color='secondary'
            className='textfields'
            id="output-area-1"
            label="Output Code"
            multiline
            rows={10}
            InputProps={{
              readOnly: true,
              style: {
                color: 'white'
                // border: '1px solid white',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'white'
              },
            }}
            style={textFieldStyle}
            value={codeResult}

          />
          <TextField
            className='textfields'
            id="output-area-2"
            label="Output Comments"
            multiline
            rows={4}
            variant='filled'
            // Styling
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
            InputProps={{
              readOnly: true,
              style: {
                color: 'white',
                border: '1px solid white',
                backgroundColor: '#393E46',
              },
            }}
            style={textFieldStyle}
            value={commentResult}
          />
        </div>

      </div>
      <button className='submit-button' onClick={
        handleButtonClick
      }>Submit</button>


    </div>
  );
}
export default MainView