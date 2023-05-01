import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TodosPage } from 'pages/TodosPage';
import { AboutPage } from 'pages/AboutPage';

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<TodosPage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};
