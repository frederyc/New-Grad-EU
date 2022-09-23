import {Box, Typography} from "@mui/material";
import LandingNavBar from "../appBars/LandingNavBar";
import JobSeeker from '../../resources/vectors/undraw_updated_resume_re_7r9j.svg';
import Recruiter from '../../resources/vectors/undraw_hiring_re_yk5n.svg';
import RegisterCard from '../cards/RegisterCard';
import LandingCarousel from "../carousels/LandingCarousel";

/**
 * Landing page, the first page a user that doesn't have
 * an account should experience
 */
const LandingPage = () => {
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
            '@media (max-width: 728px)': {
              flexDirection: 'column'
            }
          }}>
            <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '3em',
              '@media (max-width: 728px)': {
                order: 1,
                gap: '1em'
              }
            }}>
              <Typography sx={{
                fontSize: '8em',
                cursor: 'default',
                margin: '0px 40px 0px 40px',
                '@media (max-width: 728px)': {
                  fontSize: '3.5em',
                  margin: '-20px 15px -10px 15px'
                }
              }} variant={'h1'} component={'h1'}>I am looking for...</Typography>
              <Box sx={{
                display: 'flex',
                gap: '2.5em',
                justifyContent: 'center',
                '@media (max-width: 728px)': {
                  gap: '1em'
                }
              }}>
                <RegisterCard img={JobSeeker} text={'My dream job'} path={'/job-seeker-register'}/>
                <RegisterCard img={Recruiter} text={'Fresh graduates'} path={'/recruiter-register'}/>
              </Box>
            </Box>
            <Box sx={{
              width: '100%',
              height: '100%',
              order: 0
            }}>
              <LandingCarousel />
            </Box>
          </Box>
        </Box>
      </Box>
  )
}

export default LandingPage;