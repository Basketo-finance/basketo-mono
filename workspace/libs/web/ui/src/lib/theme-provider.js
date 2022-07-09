import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect, useCallback } from "react";
import lightTheme from "../themes/lightTheme";
import darkTheme from "../themes/darkTheme";

export function ThemeProvider({children, ...props}) {

  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
  const [mode, setMode] = useState("light");

  const setupListener = useCallback(() => {
    if (typeof window !== "undefined") {
      window.document.addEventListener("modeChange", (e) => {
        window.localStorage.setItem("mode", e.detail.to);
        setMode(e.detail.to);
      });
    }
  }, []);

  useEffect(() => {
    const mode = window.localStorage.getItem("mode");
    if (["light", "dark"].includes(mode)) {
      setMode(mode);
    } else {
      setMode(prefersLightMode ? "light" : "dark");
    }
    setupListener();
  }, []);

  return (
    <MuiThemeProvider theme={mode==='light' ? lightTheme : darkTheme}  {...props} >
      {children}
    </MuiThemeProvider>
  );
}
export default ThemeProvider;
