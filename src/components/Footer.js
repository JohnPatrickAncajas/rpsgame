import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white fixed-bottom">
      <div className="container">
        <span>
          <a href="https://github.com/JohnPatrickAncajas" className="text-white" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            Github
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;