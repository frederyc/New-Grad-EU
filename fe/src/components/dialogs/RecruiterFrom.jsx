import AppContext from "../../contexts/AppContext";
import {useContext} from "react";
import {Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RegisterTextField from "../textFields/RegisterTextField";

const RecruiterForm = ({open, setOpen}) => {
  const theme = useContext(AppContext);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}
      aria-labelledby={'recruiter-title'}
      aria-describedby={'recruiter-description'} fullWidth maxWidth={'sm'}>
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
        RECRUITER REGISTER
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
            Looking for promising students or fresh grads? www.newgrad.eu has lots of them, motivated and ready
            to take their next step in their career.
          </Typography>
          <Typography variant={'subtitle2'} sx={{
            textAlign: 'center',
            color: theme.palette.text.secondary,
            '@media (max-width: 728px)': {
              display: 'none'
            }
          }}>
            We request all recruiters to use their work email when they register so do not use your personal
            email account. Your request to create an account will be manually verified by one of our employees,
            this will take at most 48h. You will receive an email when your account will become active.
          </Typography>
          <RegisterTextField id={'fullName'} label={'Full Name'} />
          <RegisterTextField id={'workEmail'} label={'Work email'} type={'email'} />
          <RegisterTextField id={'company'} label={'Company you are working for'} />
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
            Send request
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default RecruiterForm;