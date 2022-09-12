import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Layout from '../src/app/components/layout';
import theme from '../src/lib/theme/my-theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
