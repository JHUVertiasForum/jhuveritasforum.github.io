import React from 'react';
import './App.css';
import ChatBox from './components/ChatBox.js';
import MainPage from './components/MainPage.js';

class App extends React.Component {
  state = {
    showMainPage: true,
    showChatbox: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showMainPage: false });

      setTimeout(() => {
        this.setState({ showChatbox: true });
      }, 2000); // Wait for the fade-out animation to finish
    }, 4000); // Change page after 4 seconds (2s for fade-in, 2s for fade-out)
  }

  render() {
    return (
      <div className='veritas-background'>
        {this.state.showMainPage && <MainPage className="main-page" />}
        {this.state.showChatbox && <ChatBox className="fade-out" />}
      </div>
    );
  }
}

export default App;