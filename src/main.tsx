import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ContextProviders from "./util/context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <ContextProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProviders>
  </ChakraProvider>
);
