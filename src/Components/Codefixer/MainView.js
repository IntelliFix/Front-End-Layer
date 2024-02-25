import TextField from '@mui/material/TextField';
import './Options.css';
import ButtonBar from '../Button/Button_Bar';
import { colors } from '@mui/material';
import { Button } from 'bootstrap';
import React, { useState } from 'react';
import axios from 'axios';

const textFieldStyle = {
  margin: '8px',
  width: '400px',
};

function MainView() {

  const [code, setCode] = useState('');
  const [comment, setComment] = useState('');


  return (
    <div className="main-container">
      <div className='views'>
        <button>Buggy</button>
        <button>Side-by-Side</button>
        <button>Corrected</button>
      </div>
      <div>
        <ButtonBar/>
      </div>

      <div className='codefixer-area'>
        <div className='inputs'>
          <TextField
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
          onChange={(e)=> setCode(e.target.value)}
          placeholder="Enter code JSON"

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
            onChange={(e)=> setComment(e.target.value)}
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
        />
        </div>

      </div>
      <button className='submit-button' onClick={
        async ()=>{
          await axios
          .post('https://integration-layer-pb5xmvfa7a-uc.a.run.app/code-fixer', {
            code: code,
            comment: comment
          }).then((res) => {
            console.log(res.data);
          }).catch((err) => {
            console.log(err);
          });
        }
      }>Submit</button>


    </div>
  );
}
export default MainView