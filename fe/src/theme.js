import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#8083FF',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#8083FF',
      secondary: '#ACB7C0'
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFF'
    },
    typography: {
      button: {
        textTransform: 'none'
      },
      fontFamily: [
        '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        'sans-serif'
      ].join(','),
      code: [
        'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'
      ].join(','),
    },
    bullets: {
      primary: '#8083FF',
      secondary: '#ACB7C0'
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#8083FF',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#8083FF',
      secondary: '#ACB7C0'
    },
    background: {
      default: '#13131A',
      paper: '#1C1C24',
    },
    typography: {
      button: {
        textTransform: 'none'
      },
      fontFamily: [
        '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        'sans-serif'
      ].join(','),
      code: [
        'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'
      ].join(','),
    },
    bullets: {
      primary: '#8083FF',
      secondary: '#ACB7C0'
    }
  },
});