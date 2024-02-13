import React from 'react';
import './App.css';
import LandingPage from './pages/landingPage.js';
import Responses from './components/Responses.js';
import { BrowserRouter,Routes, Route } from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <div className='veritas-background'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/responses" element={<Responses />} />
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;