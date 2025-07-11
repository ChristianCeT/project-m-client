import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // o 'dark'
    primary: {
      main: "#0b2f5d", // 🌕 Color principal (amarillo tipo ochre)
      contrastText: "#242105", // texto sobre botones primarios
    },
  },
});

export default theme;
