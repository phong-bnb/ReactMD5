import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Login({open, setOpen}) {

 
  return (
    <div>
    
      <Dialog
        open={open}
        onClose={setOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue="username"
        />
        <br/>
         <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue="password"
        />
        
       
        <DialogActions>
        <Button onSubmit={setOpen}>Đăng Nhập</Button>
          <Button onClick={setOpen}>Close</Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
