import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useSelector } from "react-redux";

import RotasFunction from "./routes";

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
