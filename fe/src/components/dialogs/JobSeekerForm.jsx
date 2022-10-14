import {Box, Button, Dialog, DialogContent, DialogTitle, IconButton, TextField, Typography} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';
import {useContext} from "react";
import AppContext from "../../contexts/AppContext";
import RegisterTextField from "../textFields/RegisterTextField";

const JobSeekerForm = ({open, setOpen}) => {
  const theme = useContext(AppContext);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}
      aria-labelledby={'job-seeker-title'}
      aria-describedby={'job-seeker-description'} fullWidth maxWidth={'sm'}>
      <IconButton onClick={() => setOpen(false)} sx={{
        width: 'fit-content',
        height: 'fit-content',
        color: theme.palette.text.secondary
      }}>
        <CloseIcon fontSize={'small'}/>
      </IconButton>
      <DialogTitle id={'job-seeker-title'} align={'center'} sx={{
        fontWeight: 'bold',
        paddingTop: '0'
      }}>
        JOB SEEKER REGISTER
      </DialogTitle>
      <DialogContent>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '5px',
          gap: '1em'
        }}>
          <Typography variant={'subtitle2'} sx={{
            textAlign: 'center',
            color: theme.palette.text.secondary,
            '@media (max-width: 728px)': {
              display: 'none'
            }
          }}>
            Join NewGrad today and browse tech jobs from top tier tech companies. If you don't know where to start,
            don't worry, we're here to help, by providing you top quality information for resume building and interview
            preparation
          </Typography>
          <RegisterTextField id={'fullName'} label={'Full Name'} />
          <RegisterTextField id={'email'} label={'Email'} type={'email'} />
          <Box sx={{
            display: 'flex',
            gap: '1em',
            '@media (max-width: 728px)': {
              flexDirection: 'column'
            }
          }}>
            <RegisterTextField id={'password'} label={'Password'} type={'password'} />
            <RegisterTextField id={'confirmPassword'} label={'Confirm password'} type={'password'} />
          </Box>
          <Button id={'create-account'} variant={'contained'} sx={{
            textTransform: 'none'
          }}>
            Create account
          </Button>
          <Typography variant={'h6'} sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '0.8em',
          }}>- or connect with social media -</Typography>
          <Box sx={{
            display: 'flex',
            gap: '0.5em',
            '@media (max-width: 728px)': {
              flexDirection: 'column'
            }
          }}>
            <Button variant={'contained'} startIcon={<GoogleIcon/>} sx={{
              backgroundColor: '#FF6B1F',
              textTransform: 'none',
              width: '100%',
              '&:hover': {
                backgroundColor: '#FF6B1F',
              }
            }}>Sign up with Google</Button>
            <Button variant={'contained'} startIcon={<FacebookIcon/>} sx={{
              backgroundColor: '#3B5998',
              textTransform: 'none',
              width: '100%',
              '&:hover': {
                backgroundColor: '#3B5998',
              }
            }}
            >Sign up with Facebook</Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default JobSeekerForm;