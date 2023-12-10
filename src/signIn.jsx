import { Button, TextField, Typography, Box, Link } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: theme.spacing(2),
  padding: theme.spacing(1),
  alignItems: 'center',
  width: '100%',
  maxWidth: 350,
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
  backgroundColor: 'white',
  borderRadius: '10px',
}))

const SignIn = () => {
  const [password, setPassword] = useState('');
  const [identifier, setIdentifier] = useState('');
  const handleClick = async () => {
   try {
     if (!password || !identifier) {
      toast.error('Please fill all the required fields!');
      return;
     }
     const res =await  axios.post('http://localhost:5000/login',{
      identifier: identifier,
      password:password
     });

     if (res) {
      console.log(res);
      toast.success(`Your access token is : ${res?.data?.token}`);
     }
   } catch (error) {
    console.log(error);
      toast.error(`Error: ${error?.response?.data}`)
   }
  }
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right bottom,#09183c, #3b4863, #b1b6bd,#09183c)'
    }}>
      <StyledBox>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" style={{ color: '#09193e' }}>Login</Typography>
          <Typography variant="h5" style={{ color: '#5878c1' }}>To Continue</Typography>
        </Box>
        <TextField
          id="username or Email"
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setIdentifier(e.target.value);
          }}
          sx={{
            mt: 1,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none',
              },
              '&:hover fieldset': {
                border: 'none',
              },
              '&.Mui-focused fieldset': {
                border: 'none',
              },
            },
            '& .MuiInput-underline:after': {
              borderBottom: '2px solid #808080', // greyish color
            },
            '& .MuiInput-underline:before': {
              borderBottom: 'none',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottom: 'none',
            },
            '& .MuiInputBase-input': {
              background: 'none',
            },
            borderBottom: '2px solid #a3a3a3',
          }}
          required
        />
        <TextField
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          sx={{
            mt: 1,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none',
              },
              '&:hover fieldset': {
                border: 'none',
              },
              '&.Mui-focused fieldset': {
                border: 'none',
              },
            },
            '& .MuiInput-underline:after': {
              borderBottom: 'none',
            },
            '& .MuiInput-underline:before': {
              borderBottom: 'none',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottom: 'none',
            },
            borderBottom: '2px solid #a3a3a3',
          }}
          required
        />
        <Button variant="contained" color="primary"
          onClick={handleClick}
          sx={{
            width: "60%", mt: 1, background: 'linear-gradient(to right,#09183c, #3b4863, #b1b6bd)'
          }}>
          LOG IN
        </Button>
        <Typography variant="body1" sx={{ marginTop: '10px' }}>
          New to us?{' '}
          <Link href="/signUp" underline="none">
            Sign up here.
          </Link>
        </Typography>
        <Box sx={{ height: '5px', background: 'black', width: '30%', marginTop: '40px', borderRadius: '2px' }}></Box>
      </StyledBox>
    </Box>
  );
};

export default SignIn;
