import { ChakraProvider } from '@chakra-ui/react';
import DefaultLayout from '../features/layouts/default/DefaultLayout';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default MyApp;
