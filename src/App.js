import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "./assets/styles/App.scss";
import Router from "./routes/Routes";
import RtlLayout from "./theme/RtlLayout";
import { createTheme } from "./theme/Theme";


function App() {
  const theme = createTheme();
  document.body.dir = "rtl";
  return (
    <RtlLayout>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />

        <div className="App">
          <Router />
        </div>
      </ThemeProvider>
    </RtlLayout>
  );
}

export default App;
