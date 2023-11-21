import "./App.css";
import Header from "./components/Header.jsx";
import Experiences from "./components/Experiences.jsx";
import Hobbies from "./components/Hobbies.jsx";
import Education from "./components/Education.jsx";
import { Container, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"Lucida Console", "Courier New", monospace`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#678933",
    },
    secondary: {
      main: "#333c89",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={{width: "100%"}}>
        <Header />
        <div>
          WIP
          {/*<Experiences />*/}
          {/*<Hobbies />*/}
          {/*<Education />*/}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
