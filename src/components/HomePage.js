import React from 'react';
import Header from './common/header';
export default function HomePage() {
  return (
    <div className="jumbotron">
      <Header />
      <div className="container">
        <h1 className="display-4">Fluid jumbotron</h1>
        <p className="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
        <a href="/about">About</a>
      </div>
    </div>
  );
}
