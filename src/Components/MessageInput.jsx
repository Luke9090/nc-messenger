import React, { PureComponent } from "react";

class MessageInput extends PureComponent {
  state = {
    messageInput: ""
  };

  handleChange = event => {
    this.setState({ messageInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.messageSubmit(this.state.messageInput);
    this.setState({ messageInput: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label name="item-input">Message here:</label>

          <input
            className="inputBox"
            onChange={this.handleChange}
            type="text"
            value={this.state.messageInput}
            name="item-input"
            maxLength="200"
            autoComplete="off"
            size="50"
          />
        </p>
        <input type="submit"></input>
      </form>
    );
  }
}

export default MessageInput;
