import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const outlined = "darkorange";
const focused = "orange";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          margin: "0 auto",
          padding: "0 1rem",
          fontSize: "3rem",
          color: "black",
          backgroundColor: outlined,
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: focused
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "10px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#003500"
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "white",
          "&.Mui-checked": {
            color: outlined
          },
          "&.Mui-disabled": {
            color: "#212121"
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "2rem",
          color: outlined,
          "&.Mui-focused": {
            color: focused
          }
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: "0 auto"
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "white"
        },
        root: {
          margin: "10px 0",
          height: "4rem",
          fontSize: "2rem",
          ".MuiOutlinedInput-notchedOutline": {
            border: `2px solid ${outlined}`
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: focused
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: focused
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "3rem",
          color: outlined,
          "&:hover, &.Mui-selected": {
            color: "yellow"
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "yellow"
        }
      }
    }
  },
  palette: {
    primary: {
      main: colors.blue[900]
    },
    text: {
      primary: "#fff"
    }
  },
  typography: {
    fontFamily: "Jersey10",
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
      margin: "0 auto",
      textAlign: "center"
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold"
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "auto",
      textAlign: "center"
    }
  },
  shape: {
    borderRadius: 4
  }
});
