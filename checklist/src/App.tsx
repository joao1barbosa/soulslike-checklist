import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from './contexts/SessionContext';

function App() {
  return (
    <>
      <ChakraProvider resetCSS>
        <SessionProvider>
          <RouterProvider router={router} />
        </SessionProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
