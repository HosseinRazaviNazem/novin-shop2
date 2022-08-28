import { faIR } from "@mui/material/locale";
import { createTheme as createMuiTheme } from "@mui/material/styles";

const font = "'Vazir FD', sans-serif !important";

export const createTheme = () => {

  const baseTheme = createMuiTheme(
    {
      direction: "rtl",
      typography: {
        fontFamily: font,
      },
    
      components: {
        MuiCssBaseline: {
          styleOverrides: `
      @font-face {
        font-family: ''Vazir FD', sans-serif !important;
      }
    `,
        },
      },
    },
    faIR
  );

  // Inject base theme to be used in components
  return createMuiTheme({
    ...baseTheme,
  });
};
