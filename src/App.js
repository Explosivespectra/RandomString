
import './App.css';
import CssBaseline from "@material-ui/core/Cssbaseline"
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme"
import RandomString from "./RandomString"

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RandomString />
  </ThemeProvider>
);

export default App;
