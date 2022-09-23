import {Box, Button} from "@mui/material";
import logo from '../resources/images/shuttle.png';

/**
 * Logo of the application, most likely will be changed in the future
 */
const Logo = () => {
  return <Box sx={{
    display: 'flex',
    img: {
      width: '64px',
      height: '64px',

      '@media (max-width: 728px)': {
        width: '32px',
        height: '32px'
      }
    },
    h3: {
      textAlign: 'center',
      margin: '0',
      marginTop: '5px',
      fontSize: '1.25em'
    },
    h2: {
      textAlign: 'center',
      margin: '0',
      marginLeft: '-5px',
      marginTop: '-5px'
    },
    '#app-title': {
      '@media (max-width: 728px)': {
        display: 'none'
      }
    }
  }}>
    <img src={logo} alt={'Cannot load image'} />
    <div id={'app-title'}>
      <h3>New</h3>
      <h2>Grad</h2>
    </div>
  </Box>
}

export default Logo;