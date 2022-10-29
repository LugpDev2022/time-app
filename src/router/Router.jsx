import { Route, Routes } from 'react-router-dom';
import { ClockPage, HomePage, TimerPage, WorldClockPage } from '../pages';

export const Router = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='clock' element={<ClockPage />} />
    <Route path='world-clock' element={<WorldClockPage />} />
    <Route path='timer' element={<TimerPage />} />
  </Routes>
);
