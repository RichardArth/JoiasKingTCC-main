import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/home/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}  />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
