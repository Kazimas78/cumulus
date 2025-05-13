import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Mise à jour du titre du document
document.title = 'Installation et Remplacement Ballon d\'Eau Chaude Ajaccio | ALLOcumulus';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);