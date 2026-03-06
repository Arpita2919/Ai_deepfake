import React from 'react';

export default function Navbar() {
  const scrollToAnalyzer = () => {
    document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <span className="navbar__logo-text">DeepScan</span>
        </div>

        <nav className="navbar__links">
          <a href="#analyzer" className="navbar__link">How it works</a>
          <a href="#analyzer" className="navbar__link">Features</a>
          <a href="#analyzer" className="navbar__link">About</a>
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__btn navbar__btn--secondary"
            onClick={scrollToAnalyzer}
          >
            Learn more
          </button>
          <button
            type="button"
            className="navbar__btn navbar__btn--primary"
            onClick={scrollToAnalyzer}
          >
            Try now
          </button>
        </div>
      </div>
    </header>
  );
}
