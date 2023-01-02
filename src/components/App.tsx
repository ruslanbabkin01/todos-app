import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { TodosPage } from 'pages/TodosPage';
import { AboutPage } from 'pages/AboutPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<TodosPage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
