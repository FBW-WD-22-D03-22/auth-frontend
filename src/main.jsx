import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-oty7vgyxdomvkebj.us.auth0.com"
    clientId="eACYQqs20ICDdixh6bXmy3RGCXo4eebN"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
