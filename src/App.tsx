import { ChakraProvider } from "@chakra-ui/react";
import { AppRouter } from "./routes/AppRouter";

export const App = () => {
  return (
    <>
      <ChakraProvider>
        <AppRouter />
      </ChakraProvider>
    </>
  );
};
