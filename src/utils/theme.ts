import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const primary = "#fff";
const background = "#141414";
const inputBackground = colors.grey[900];
const border = colors.grey[700];
const button = colors.blue[900];

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          width: "100%",
          height: "4rem",
          color: primary,
          fontSize: "2rem",
          backgroundColor: button
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          backgroundColor: background
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: primary,
          "&.Mui-checked": {
            color: primary
          },
          "&.Mui-disabled": {
            color: inputBackground
          }
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: "0 auto"
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          width: "90vw",
          margin: "auto"
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: primary,
          padding: "0.75rem",
          margin: "0 5px",
          maxHeight: "49px"
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.5rem",
          color: primary
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: "1.5rem",
          color: primary,
          "& fieldset": {
            borderColor: border
          },
          "& .MuiSvgIcon-root": {
            color: primary
          }
        }
      }
    }
  },
  palette: {
    primary: {
      main: colors.blue[900]
    },
    text: {
      primary: primary
    }
  },
  typography: {
    fontFamily: "Jersey10",
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
      margin: "0 auto",
      textAlign: "center",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "0 auto",
      textAlign: "center",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "5px auto",
      textAlign: "center",
    }
  },
  shape: {
    borderRadius: 4
  },
  spacing: 8
});
