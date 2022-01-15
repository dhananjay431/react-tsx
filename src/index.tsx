import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Login from './pages/Login';
import Empdtls from './pages/Emp';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tools from './pages/tools/Tools';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="main/app" element={<App test="d-test-123" />}></Route>
        <Route path="main/emp/:id" element={<Empdtls />}></Route>
        <Route path="tools" element={<Tools />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
