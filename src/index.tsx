import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import UserIdProvider from "./providers/UserIdProvider/ui/UserIdProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserIdProvider>
      <App />
    </UserIdProvider>
  </React.StrictMode>
);
