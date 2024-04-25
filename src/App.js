import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import Home from './views/Home';
import Normal from './views/Normal';
import Impossible from './views/Impossible';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <NavigationBar />
        <div className="flex-grow-1 mt-5">
          <Routes>
            <Route path="/rpsgame" element={<Home />} />
            <Route path="/normal" element={<Normal />} />
            <Route path="/impossible" element={<Impossible />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
