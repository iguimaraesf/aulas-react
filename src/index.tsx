import React from 'react';
import ReactDOM from 'react-dom/client';
// Era import App from './App' porque era uma exportação de função. Agora é de função SETA.
// Isso ajuda o intellisense do Visual Studio Code
import { App } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
