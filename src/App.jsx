import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './pages/PageLayout';
import ProtectedRoute from './shared/ProtectedRoute/ProtectedRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TodoListPage = lazy(() => import('./pages/TodoListPage/TodoListPage'));

function ScrollToTop() {
  window.scrollTo(0, 0);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="todos" element={<ProtectedRoute><TodoListPage /></ProtectedRoute>} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
