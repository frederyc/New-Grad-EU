import {Box} from "@mui/material";
import Logo from "../Logo";
import LandingDrawer from "../drawers/LandingDrawer";

const LandingNavBar = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Logo />
      <LandingDrawer />
    </Box>
  );
}

export default LandingNavBar;