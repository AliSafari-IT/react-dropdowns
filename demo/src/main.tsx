import React from 'react'
import ReactDOM from 'react-dom/client'
import '@asafarim/design-tokens/css';

import App from './App.tsx'
import './index.css'
import ThemeProvider from '@asafarim/react-themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultMode="auto" persistMode={true}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
