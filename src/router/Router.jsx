import { Navigate, Route, Routes } from 'react-router-dom';
import { ClockPage, TimerPage, WorldClockPage } from '../pages';

export const Router = () => (
  <Routes>
    <Route path='/' element={<ClockPage />} />
    <Route path='world-clock' element={<WorldClockPage />} />
    <Route path='timer' element={<TimerPage />} />
    <Route path='timer/new' element={<TimerPage />} />
    <Route path='/*' element={<Navigate to='/' />} />
  </Routes>
);
