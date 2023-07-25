import { useMemo, useState } from 'react';
import './App.css';
import { createTheme, Button, CssBaseline, Box, Stack, Paper, ImageListTile, ListSubheader, List, Typography } from '@mui/material';
import getDesignTokens from './styles/MyTheme';
import { ThemeProvider } from '@emotion/react';
import AppBarr from './components/AppBarr';
import Mylist from './components/Mylist';
import Cards from './components/Cards';
import OtherAdditions from './components/OtherAdditions';
import AddPosts from './components/AddPosts';

function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
        ? "light"
        : "dark"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [showList, setshowList] = useState("none");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarr setshowList={setshowList} showList={showList} />



      <Stack direction="row" >
        <Mylist setmyMOde={setmyMOde} theme={theme} mode={mode} showList={showList} />
        <Cards />
        <OtherAdditions />
      </Stack>


      <AddPosts />

    </ThemeProvider>
  );
}

export default App;
