import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

export default function App() {
  const router = window.location.pathname;
  if (router === '/about') return <AboutPage />;
  return <HomePage />;
}
