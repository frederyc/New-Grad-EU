import {Box, Button, Drawer, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useContext, useState} from "react";
import AppContext from "../../contexts/AppContext";
import {Link} from "react-router-dom";

/**
 * Button in a landing drawer, its purpose is to route to other pages
 * @param text The text inside the drawer button
 * @param path The path to which the button will route on click
 * @constructor
 */
const DrawerButton = ({text, path}) => {
  return (
      <Link to={path} style={{ textDecoration: 'none' }}>
        <Button sx={{
          textTransform: 'none',
          '@media (min-width: 728px)': {
            fontWeight: 'bold',
            fontSize: '1.25em',
          }
        }} size={'large'} variant={'text'}>
          {text}
        </Button>
      </Link>
  )
}

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useContext(AppContext);

  return (
      <Box sx={{
        '@media (max-width: 728px)': {
          display: 'block'
        },
        display: 'none'
      }}>
        <IconButton onClick={() => setIsOpen(true)}>
            <MenuIcon sx={{
              color: theme.palette.primary.main
            }} />
        </IconButton>
        <Drawer anchor={'right'} open={isOpen} onClose={() => setIsOpen(false)}>
          <Box p={3} sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '250px'
          }}>
            <DrawerButton text={'Browse openings'} path={'/'}/>
            <DrawerButton text={'Resume tips'} path={'/resume-tips'} />
            <DrawerButton text={'Interview prep'} path={'/interview-prep'} />
            <DrawerButton text={'Rules'} path={'/rules'} />
            <DrawerButton text={'About us'} path={'/about-us'} />
          </Box>
        </Drawer>
      </Box>
  );
}

const DesktopDrawer = () => {
  return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5em',
        '@media (max-width: 728px)': {
          display: 'none'
        }
      }}>
        <DrawerButton text={'Browse openings'} path={'/'}/>
        <DrawerButton text={'Resume tips'} path={'/resume-tips'} />
        <DrawerButton text={'Interview prep'} path={'/interview-prep'} />
        <DrawerButton text={'Rules'} path={'/rules'} />
        <DrawerButton text={'About us'} path={'/about-us'} />
      </Box>
  );
}

const LandingDrawer = () => {
  return (
      <Box>
        <MobileDrawer/>
        <DesktopDrawer/>
      </Box>
  );
}

export default LandingDrawer;