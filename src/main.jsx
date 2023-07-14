import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Auth0Provider
    domain="dev-fnag8umof0jbqiso.us.auth0.com"
    clientId="vSB8aptrkljs7Qo6NDEF4ut5X79rRbSw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    



    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>

)