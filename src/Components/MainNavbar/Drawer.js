import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import "./MainNavbar.css";

export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({
      left: false,
    });
  
    const toggleDrawer = (open: Boolean) => () => {  
      setState({ ...state, left: open });
    };
  
    const list = () => (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div className='burger-menu-items' >
        
        <a href="#">Account</a>
        <a href="#">Submissions</a>
        <a href="#">About us</a>
        <a href="#">Privacy Policy</a>
        </div>
        
      </Box>
    );
  
    return (
      <div>
        <Button className='burger-menu' onClick={toggleDrawer(true)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        </Button>
        <SwipeableDrawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          PaperProps={{
            style: {
              backgroundColor: '#393E46',
            },
          }}
        >
          {list()}
        </SwipeableDrawer>
      </div>
    );
  }