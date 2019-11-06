import React, { PureComponent } from "react";
import "./MessageInput.css";

class MessageInput extends PureComponent {
  state = {
    messageInput: "",
    nicknameInput: ""
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const body = this.state.messageInput;
    const nickname = this.state.nicknameInput;
    this.props.messageSubmit({ nickname, body });
    this.setState({ messageInput: "" });
  };

  render() {
    return (
      <div className="messageFooter">
        <form onSubmit={this.handleSubmit}>
          <label name="nickname-input">
            Nickname:
            <input
              className="nameInput"
              onChange={this.handleChange}
              type="text"
              value={this.state.nicknameInput}
              name="item-input"
              maxLength="20"
              autoComplete="off"
              height="30"
              size="50"
              id="nicknameInput"
            />
          </label>
          <label name="item-input">
            Message:
            <input
              className="messageInput"
              onChange={this.handleChange}
              type="text"
              value={this.state.messageInput}
              name="item-input"
              maxLength="200"
              autoComplete="off"
              size="50"
              id="messageInput"
            />
            <input type="submit"></input>
          </label>
        </form>
      </div>
    );
  }
}

export default MessageInput;
