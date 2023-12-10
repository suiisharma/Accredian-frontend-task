import { Button, TextField, Typography, Box, Link} from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import { useState } from 'react';
import{toast} from 'react-hot-toast';

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
  backgroundColor:'#09193e',
  borderRadius: '10px',
  color:'white'
}))

const SignUp = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit=async()=>{
  try {
    if(!name||!email||!password){
      toast.error('Please fill all the required fields!');
      return;
    }
    const res=await  axios.post('http://localhost:5000/signUp',{
      name:name,
      email:email,
      password:password
    });
    if (res) {
      console.log(res);
      toast.success(res?.data);
      return ;
    }
  } catch (error) {
    toast.error('Error:'+error?.response?.data);
    return ;
  }
  
  }
  return (
    <Box sx={{
      width:'100vw',
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      background:'linear-gradient(to right bottom,#09183c, #3b4863, #b1b6bd,#09183c)'
    }}>
    <StyledBox>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" style={{color:'#5878c1'}}>Sign Up</Typography>
        <Typography variant="h5" style={{color:'white'}}>To Continue</Typography>
      </Box>
      <TextField
        id="username"
        type="text"
        placeholder="Username"
        onChange={(e)=>{
          setName(e.target.value);
        }}
        sx={{ mt: 1,
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
            color:'white',
          },
          borderBottom:'2px solid #4864a7',
          '& .MuiInputBase-input::placeholder': {
            color:'#77797e'
          },
         
        }}
        required
        />

      <TextField
        id="email"
        type="email"
        placeholder="Email"
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
        sx={{ mt: 1,
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
          borderBottom:'2px solid #4864a7',
          '& .MuiInputBase-input::placeholder': {
            color:'#77797e'
          },
          '& .MuiInputBase-input': {
            background: 'none',
            color:'white',
          },
        }}
        required
        />
      <TextField
        id="password"
        type="password"
        placeholder="Password"
        onChange={(e)=>{
          setPassword(e.target.value);
        }}
        sx={{ mt: 1,
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
          borderBottom:'2px solid #4864a7',
          '& .MuiInputBase-input::placeholder': {
            color:'#77797e'
          },
          '& .MuiInputBase-input': {
            background: 'none',
            color:'white',
          },
        }}
        required
        />
  <Button
  onClick={handleSubmit}
  variant="contained" color="primary" sx={{width:"60%", mt: 1,background:'#e3e6e8',borderRadius:'10px' ,color:'#0a1a3f',fontStyle:'bold'
 }}>
        Create Account
      </Button>
      <Typography variant="body1" sx={{marginTop:'10px',  color:'#77797e'
}}>
        Already have an account?{' '}
        <Link href="/" underline="none">
          Sign in here.
        </Link>
      </Typography>
      <Box sx={{height:'5px',background:'white',width:'30%',marginTop:'40px',borderRadius:'2px'}}></Box>
    </StyledBox>
    </Box>
  );
};

export default SignUp;
