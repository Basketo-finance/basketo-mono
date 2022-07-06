import "./styles.css";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "../utils/theme/lightTheme";
import darkTheme from "../utils/theme/darkTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
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
    <ThemeProvider theme={ mode=='light' ? lightTheme: darkTheme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
