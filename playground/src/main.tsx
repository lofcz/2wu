import { scan } from 'react-scan';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';

import App from './App';

scan({
  enabled: import.meta.env.DEV,
});

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(<App />);
