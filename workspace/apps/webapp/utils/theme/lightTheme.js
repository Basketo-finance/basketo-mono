import { createTheme } from "@mui/material/styles";
import colorPalette from "./palette.js";

const buttonStyle = (variant, color) => ({
  backgroundColor:
    colorPalette[color][variant === "contained" ? "light" : "inherit"],
  color: colorPalette[color].darker,
  border: `1.5px solid ${
    colorPalette[color][
      variant === "contained"
        ? "light"
        : variant === "outlined"
        ? "darker"
        : "inherit"
    ]
  }`,
  boxShadow: "none",
  "&:hover": {
    backgroundColor:
      colorPalette[color][variant === "contained" ? "light" : "lighter"],
    border: `1.5px solid ${
      colorPalette[color][variant === "text" ? "inherit" : "darker"]
    }`,
    boxShadow: variant !== "text" ? "2px 2px 5px rgba(0,0,0,0.25)" : "none",
  },
});

const textFieldStyle = (variant, color) => ({
  ".MuiInputLabel-root": {
    color: `${colorPalette[color].dark} !important`,
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: `1.5px solid ${colorPalette[color].darker}`,
    },
    "&:hover fieldset": {
      borderColor: colorPalette[color].darker,
    },
    "& ::placeholder": {
      color: colorPalette[color].darker,
    },
  },
});

const lightTheme = createTheme({
  typography: {
    fontFamily: "Work Sans",
  },
  palette: {
    mode: "light",
    primary: {
      light: colorPalette.primary.lighter,
      main: colorPalette.primary.main,
      dark: colorPalette.primary.darker,
    },
    secondary: {
      light: colorPalette.secondary.lighter,
      main: colorPalette.secondary.main,
      dark: colorPalette.secondary.darker,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "500px",
          textTransform: "none",
          fontWeight: "600",
          padding: "0.5em 1em",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: buttonStyle("contained", "primary"),
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: buttonStyle("contained", "secondary"),
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: buttonStyle("outlined", "primary"),
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: buttonStyle("outlined", "secondary"),
        },
        {
          props: { variant: "text", color: "primary" },
          style: buttonStyle("text", "primary"),
        },
        {
          props: { variant: "text", color: "secondary" },
          style: buttonStyle("text", "secondary"),
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": { borderRadius: "500px" },
        },
      },
      variants: [
        {
          props: { variant: "outlined", color: "primary" },
          style: textFieldStyle("outlined", "primary"),
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: textFieldStyle("outlined", "secondary"),
        },
        {
          props: { variant: "standard", color: "primary" },
          style: textFieldStyle("standard", "primary"),
        },
        {
          props: { variant: "standard", color: "secondary" },
          style: textFieldStyle("standard", "secondary"),
        },
      ],
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: "window" },
          style: {
            borderRadius: "0px",
            boxShadow: "none",
            zIndex: "0",
            backgroundColor: "#fff",
            width: "100vw",
            minHeight: "100vh",
            overflowX:"hidden"
          },
        },
      ],
    },
  },
});

export default lightTheme;
