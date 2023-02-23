import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './layouts/main'
import NoPage from './pages/NoPage'
import Home from './pages/Home'
import Chatroom from './pages/Chatroom'
import './assets/styles/main.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='chatroom' element={<Chatroom />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
