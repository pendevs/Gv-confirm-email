import React, { FC } from "react";

/**
 * Custom providers
 */

/**
 * MUI Theme
 */
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "../styles/muiTheme";

/**
 * Router
 */
import { BrowserRouter } from "react-router-dom";

/**
 * Redux
 */

/** Apollo */
import AuthApolloProvider from "../auth/authApolloProvider";

// @ts-ignore
export const ContextManager: FC = ({ children }) => (
  <BrowserRouter>
        <AuthApolloProvider>
          <ThemeProvider theme={defaultTheme}>
                {children}
          </ThemeProvider>
        </AuthApolloProvider>
  </BrowserRouter>
);
