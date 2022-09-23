import {CssBaseline, ThemeProvider} from "@mui/material";
import {useState} from "react";
import {lightTheme, darkTheme} from "./theme";
import AppContext from "./contexts/AppContext";
import LandingPage from './components/pages/LandingPage';
import {Route, Routes} from 'react-router-dom'

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider value={theme}>
        <Routes>
          <Route path={'/landing'} element={<LandingPage />} />
        </Routes>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
