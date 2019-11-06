import React, { PureComponent } from 'react';

class MessageInput extends PureComponent {
  state = {
    messageInput: '',
    nicknameInput: ''
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const body = this.state.messageInput;
    const nickname = this.state.nicknameInput;
    this.props.messageSubmit({ nickname, body });
    this.setState({ messageInput: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label name="nickname-input">
          Nickname:
          <input
            className="inputBox"
            onChange={this.handleChange}
            type="text"
            value={this.state.nicknameInput}
            name="item-input"
            maxLength="200"
            autoComplete="off"
            size="50"
            id="nicknameInput"
          />
        </label>
        <label name="item-input">
          Message:
          <input
            className="inputBox"
            onChange={this.handleChange}
            type="text"
            value={this.state.messageInput}
            name="item-input"
            maxLength="200"
            autoComplete="off"
            size="50"
            id="messageInput"
          />
        </label>
        <input type="submit"></input>
      </form>
    );
  }
}

export default MessageInput;
