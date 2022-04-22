import { createTheme } from "@material-ui/core/styles";
import Fonts from "@/assets/fonts";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          Fonts.ArchivoBlackRegular,
        ]
      }
    },
  
  }
  
});
export default theme;
