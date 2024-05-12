import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#FFFFFF",
    },
    info: {
      main: "#2F80ED",
      light: "#E9F5FE",
    },
  },
  typography: {
    fontFamily: "Mona",
    button: {
      justifyContent: "left",
      textTransform: "none",
    },
  },
});

export default theme;
