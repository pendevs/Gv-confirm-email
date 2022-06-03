import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AuthApolloProvider from './auth/authApolloProvider';
import { ContextManager } from './context/ContextManager';
import { RouterConfig } from './navigation/RouterConfig';
import { ConfirmEmail } from "./pages/ConfirmEmail";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthApolloProvider>
          {/* <ConfirmEmail></ConfirmEmail> */}
          <RouterConfig /> 
        </AuthApolloProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
