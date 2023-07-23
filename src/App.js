import { useMemo, useState } from 'react';
import './App.css';
import { createTheme, Button, CssBaseline } from '@mui/material';
import getDesignTokens from './styles/MyTheme';
import { ThemeProvider } from '@emotion/react';
function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
        ? "light"
        : "dark"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <Button onClick={() => {

        localStorage.setItem(
          "currentMode",
          theme.palette.mode === "dark" ? "light" : "dark"
        );

        setmyMOde(theme.palette.mode === "light" ? "dark" : "light");
      }} variant="text" color="primary">
        change mode
      </Button>


    </ThemeProvider>


  );
}

export default App;
