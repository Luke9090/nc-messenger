import React, { PureComponent } from "react";
import "./MessageDisplay.css";

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
      <div className="messageBody">
        <ul>
          {messages.map(message => {
            return <li key={message.body}>> {message.body}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default MessageDisplay;
