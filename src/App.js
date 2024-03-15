import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";

import RotasFunction from "./routes";
import store from './redux'

function App() {

  const theme = useSelector((state) => state.mode.darkmode);

  const darkTheme = createTheme({
    palette: theme,
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <RotasFunction/>
    </ThemeProvider>
  );
}

export default App;
