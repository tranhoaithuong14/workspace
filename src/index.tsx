import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import '@styles/global.less';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
