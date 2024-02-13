import React, { useState, useEffect } from 'react';
import MainPage from '../components/MainPage';
import ChatBox from '../components/ChatBox';

const LandingPage = () => {
  const [showMainPage, setShowMainPage] = useState(true);
  const [showChatbox, setShowChatbox] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMainPage(false);

      setTimeout(() => {
        setShowChatbox(true);
      }, 2000); // Wait for the fade-out animation to finish
    }, 3000); // Change page after 4 seconds (2s for fade-in, 2s for fade-out)
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {showMainPage && <MainPage className="main-page" />}
      {showChatbox && <ChatBox className="fade-out" />}
    </div>
  );
}

export default LandingPage;