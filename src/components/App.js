import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/header';

export default function App() {
  function getPage() {
    const router = window.location.pathname;
    if (router === '/about') return <AboutPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}
