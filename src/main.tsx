// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
// import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'

// createRoot(document.getElementById('root')!).render(
//   // <BrowserRouter>
//   //   <App />
//   // </BrowserRouter>,
//   <React.StrictMode>
//   <App />
// </React.StrictMode>,
// )

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <App />
</React.StrictMode>,
);