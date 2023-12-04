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
    fontFamily: ["Poppins", "sans-serif", "Monument Extended"].join(","),
    button: {
      justifyContent: "left",
      textTransform: "none",
    },
  },
});

export default theme;
