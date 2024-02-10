import React from 'react';
import './App.css';
import ChatBox from './components/ChatBox.js';
import MainPage from './components/MainPage.js';

class App extends React.Component {
  state = {
    showChatbox: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showChatbox: true });
    }, 3000); // Change page after 5 seconds
  }

  render() {

    return (
      <div className = {this.state.showChatbox ? 'fade-center-active' : 'fade-center'}>
        {this.state.showChatbox ? <ChatBox /> : <MainPage />}
      </div>
    );
  }
}

export default App;