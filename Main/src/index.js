import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Auth0Provider
    domain="dev-gjeq7hfw8nji0jk4.us.auth0.com"
    clientId="hV7co0z34ky1og1WrDjF3IREAV0e3uQU"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <App />
  </Auth0Provider>
  </React.StrictMode>
);


