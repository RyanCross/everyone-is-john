import { createTheme, ThemeOptions } from '@mui/material/styles';
const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#090909',
    },
    secondary: {
      main: '#0066FF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#E0E0E0',
    },
    text: {
      primary: '#090909',
      secondary: '#666666',
    },
    error: {
      main: '#FF3131',
    },
    info: {
      main: '#FFDD33',
    },
    success: {
      main: '#00CC66',
    },
  },
  typography: {
    h1: {
      fontFamily: "'Rock 3D', cursive",
    },
    h2: {
      fontFamily: "'Rock 3D', cursive",
    },
    h3: {
      fontFamily: 'Neucha',
    },
    h4: {
      fontFamily: 'Neucha',
    },
    body1: {
      fontFamily: 'Neucha',
    },
    subtitle1: {
      fontFamily: 'Neucha',
    },
    subtitle2: {
      fontFamily: 'Neucha',
    },
    body2: {
      fontFamily: 'Neucha',
    },
    caption: {
      fontFamily: 'Neucha',
    },
    overline: {
      fontFamily: 'Neucha',
    },
    h5: {
      fontFamily: 'Neucha',
    },
    h6: {
      fontFamily: 'Neucha',
    },
    button: {
      fontFamily: 'Barrio',
      fontSize: '1.5rem',
    },

  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '3px dashed #090909',
          borderRadius: '8px',
          fontWeight: 'bold',
          transition: '0.2s',
          background: '#FFFFFF',
          color: '#090909',
          boxShadow: '4px 4px 0px #000000',
          '&:hover': {
            transform: 'rotate(-3deg) scale(1.1)',
            boxShadow: '6px 6px 0px #000000',
            background: '#FFDD33',
            color: '#090909',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#E0E0E0',
          border: '3px dashed #090909',
          boxShadow: '6px 6px 0px #090909',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: '#0066FF',
          color: '#FFFFFF',
          border: '2px solid #090909',
          boxShadow: '2px 2px 0px #090909',
          fontWeight: 'bold',
        },
      },
    },
  },
};

const theme = createTheme(themeOptions)

export default theme
