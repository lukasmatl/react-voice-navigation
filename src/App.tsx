import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {ContactPage, HomePage} from "./pages";
import {VoiceNavigationProvider} from "./components/VoiceNavigation/contexts";
import {SpeechRecognitionButton} from "./components/VoiceNavigation/components/SpeechRecognitionButton";

function App() {
  return (
    <div className="App">
      <VoiceNavigationProvider>
        <HashRouter>
          <div id="links">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <SpeechRecognitionButton />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </HashRouter>
      </VoiceNavigationProvider>
    </div>
  );
}

export default App;
