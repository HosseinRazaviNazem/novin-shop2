import { createTheme, ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { faIR } from "@mui/material/locale";
import { connect } from "react-redux";


export default function Theme({
  dark,
  children,
  fontSize,
  fontFamily,
  borderRadius,
}) {
  const theme = createTheme(
    {
      shape: {
        borderRadius,
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1330,
          xl: 1600,
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              "&::-webkit-scrollbar-thumb, & ::-webkit-scrollbar-thumb": {
                borderRadius,
                backgroundColor: dark ? `#815455` : "#fafafa",
                minHeight: 24,
                border: `3px solid ${dark ? "rgb(43,43,43)" : "#fafafa"}`,
              },
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              borderRadius,
            },
          },
        },
      },
      direction: "rtl",
      typography: {
        fontSize,
        fontFamily: [fontFamily].join(","),
      },
      palette: {
        primary: {
          main: dark ? "#F2ECFF" : "#999999",
          light: dark ? "#FAF8FF" : "#666666",
          dark: dark ? "#666666" : "#FAF8FF",
          contrastText: dark ? "rgba(0,0,0,.87)" : undefined,
        },
        secondary: {
          main: dark ? "#99171b" : "#256c29",
          light: dark ? "#FAF8FF" : "#666666",
          dark: dark ? "#99171b" : "#256c29",
          contrastText: dark ? "rgba(0,0,0,.87)" : undefined,
        },
        text: {
          primary: dark ? "#F2ECFF" : "#999999",
          secondary: dark ? "#FAF8FF" : "#666666",
          disabled: dark ? "#666666" : "#FAF8FF",
          icon: dark ? "rgba(255,255,255,.5)" : "",
        },
        background: {
          default: dark ? "#666666" : "#FAF8FF",
        },
        mode: dark ? "dark" : "light",
      },
    },
    faIR
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}


const mapStatetoProps = (state)=>{
    return{
        dark: state.dark,
        fontSize: state.fontSize,
        borderRadius: state.borderRadius,
        fontFamily: state.fontFamily,
    }
}

const reduxTheme = connect(mapStatetoProps)(Theme)
export {reduxTheme as Theme}


