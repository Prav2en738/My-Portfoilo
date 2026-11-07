import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}
