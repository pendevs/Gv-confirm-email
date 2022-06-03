import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AuthApolloProvider from './auth/authApolloProvider';
import { RouterConfig } from './navigation/RouterConfig';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthApolloProvider>
          <RouterConfig /> 
        </AuthApolloProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
