import React from 'react';

class TimedText extends React.Component {
  state = {
    texts: [],
  };

  componentDidMount() {
    this.props.listOfText.forEach((text, index) => {
      setTimeout(() => {
        this.setState(prevState => ({
          texts: [...prevState.texts, text],
        }));
      }, index * 2000); // Change text every 2 seconds
    });
  }

  render() {
    return (
      <div>
        {this.state.texts.map((text, index) => (
          <p className="fade-enter-active" key={index}>{text}</p>
          ))}
      </div>
    );
  }
}

export default TimedText;