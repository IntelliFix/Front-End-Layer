import TextField from '@mui/material/TextField';
import './Options.css';
import { colors } from '@mui/material';

const textFieldStyle = {
  margin: '8px',
  width: '400px',
};

function Views() {
  return (
    <div className="main-container">
      <div className='views'>
        <button>Buggy</button>
        <button>Side-by-Side</button>
        <button>Corrected</button>
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


    </div>
  );
}
export default Views