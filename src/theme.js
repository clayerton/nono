import { createTheme } from "@material-ui/core/styles";
import { red, amber, grey } from "@material-ui/core/colors";

import Fonts from "@/assets/fonts";
const fontFamilyArchivoBlack = {
  fontFamily: [
    "Archivo Black",
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(",")
};
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
    MuiButton: {

      root: {
        background: '#fff',
        border: '0.5px solid #000000',
        boxSizing: 'border-box',
        borderRadius: '10px',
        href: 'none',
        variant: 'text',
        textTransform: 'none',

      },
      text: {
        color: '#000',
        height: '40px',
        padding: '0 24px',
        fontFamily: 'Archivo Black',
      },
    },
  
  },
  custom: {
    fontFamily: {
      archivo: fontFamilyArchivoBlack,
    },
    palette: {
      iconColor: "#5f6368",
      background: "#000",
      iconHighlight: grey[900],
      notesCheckbox: grey[700],
      profilePopColor: "#FFF",
      noteBackground: {
        default: "#000",
        red: "#F28B82",
        orange: "#FBBC04",
        yellow: "#FFF475",
        green: "#CCFF90",
        cyan: "#A7FFEB",
        lightblue: "#CBF0F8",
        darkblue: "#AECBFA",
        purple: "#D7AEFB",
        pink: "#FDCFE8",
        brown: "#E6C9A8",
        grey: "#E8EAED"
      },
      background: {
        default: "#FFF",
        highlight: "#F1F3F4"
      },
      noteColorCheck: "#0007",
      labelBackground: "#0002"
    }
  }
  
});
export default theme;
