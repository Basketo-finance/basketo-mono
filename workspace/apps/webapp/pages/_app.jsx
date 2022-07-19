import './styles.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@basketo/web-ui';
import { Provider } from 'react-redux';
import { store } from '../app/store';

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
