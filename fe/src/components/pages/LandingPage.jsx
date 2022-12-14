import {Box, Typography} from "@mui/material";
import LandingNavBar from "../appBars/LandingNavBar";
import JobSeeker from '../../resources/vectors/undraw_updated_resume_re_7r9j.svg';
import Recruiter from '../../resources/vectors/undraw_hiring_re_yk5n.svg';
import RegisterCard from '../cards/RegisterCard';
import LandingCarousel from "../carousels/LandingCarousel";
import {useState} from "react";
import JobSeekerForm from "../dialogs/JobSeekerForm";
import RecruiterForm from "../dialogs/RecruiterFrom";

/**
 * Landing page, the first page a user that doesn't have
 * an account should experience
 */
const LandingPage = () => {
  const [jobSeekerRegisterOpen, setJobSeekerRegisterOpen] = useState(false);
  const [recruiterRegisterOpen, setRecruiterRegisterOpen] = useState(false);

  return (
      <Box id={'landing-page'} sx={{
        padding: '2% 4% 2% 4%',
        width: '100vw',
        height: '100vh'
      }}>
        <Box id={'inner-frame'} sx={{
          width: '100%',
          height: '100%',
        }}>
          <LandingNavBar />
          <Box sx={{
            display: 'flex',
            gap: '2em',
            '@media (max-width: 1600px)': {
              flexDirection: 'column',
            },
          }}>
            <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '3em',
              '@media (max-width: 1600px)': {
                order: 1,
                gap: '1em',
                marginBottom: '1em'
              },
            }}>
              <Typography sx={{
                fontSize: '5vw',
                cursor: 'default',
                margin: '0px 40px 0px 40px',
                '@media (max-width: 728px)': {
                  fontSize: '3.5em',
                  margin: '-20px 15px -10px 15px'
                }
              }} variant={'h1'} component={'h1'}>
                I am looking
              </Typography>
              <Typography sx={{
                fontSize: '5vw',
                cursor: 'default',
                margin: '-0.5em 40px 0px 40px',
                '@media (max-width: 728px)': {
                  fontSize: '3.5em',
                  margin: '-20px 15px -10px 15px'
                }
              }} variant={'h1'} component={'h1'}>
                for...
              </Typography>
              <Box sx={{
                display: 'flex',
                gap: '2vw',
                margin: '0px 0px 0px 40px',
                '@media (max-width: 728px)': {
                  gap: '1vw'
                }
              }}>
                <RegisterCard img={JobSeeker} text={'My dream job'} setOpen={setJobSeekerRegisterOpen}/>
                <JobSeekerForm open={jobSeekerRegisterOpen} setOpen={setJobSeekerRegisterOpen}/>
                <RegisterCard img={Recruiter} text={'Fresh graduates'} setOpen={setRecruiterRegisterOpen}/>
                <RecruiterForm open={recruiterRegisterOpen} setOpen={setRecruiterRegisterOpen} />
              </Box>
            </Box>
            <Box sx={{
              width: '100%',
              height: '100%',
              order: 0,
            }}>
              <LandingCarousel />
            </Box>
          </Box>
        </Box>
      </Box>
  )
}

export default LandingPage;