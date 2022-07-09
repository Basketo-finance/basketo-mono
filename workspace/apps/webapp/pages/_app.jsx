import "./styles.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "@basketo/web-ui";

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
 
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
