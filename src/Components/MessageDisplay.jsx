import React, { PureComponent } from 'react';

class MessageDisplay extends PureComponent {
  state = {
    messages: []
  };

  componentDidMount() {
    this.setState({ messsages: this.props.messages });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.messages.length !== this.props.messages.length) {
      this.setState({ messages: this.props.messages });
    }
  }

  render() {
    const { messages } = this.state;
    return (
      <ul>
        {messages.map(message => {
          return <li key={message.body}>{message.body}</li>;
        })}
      </ul>
    );
  }
}

export default MessageDisplay;
