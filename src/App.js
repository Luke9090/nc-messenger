import React, { PureComponent } from 'react';
import './App.css';
import * as db from './utils/db';
import * as socketUtils from './utils/sockets';
import MessageDisplay from './Components/MessageDisplay';
import MessageInput from './Components/MessageInput';

class App extends PureComponent {
  state = {
    messages: [],
    socket: null
  };

  componentDidMount = () => {
    db.getStoredMessages().then(messages => {
      this.setState({ messages, socket: socketUtils.connectToSocket() }, () => {
        const { socket } = this.state;
        socketUtils.listenForMessages(socket, this.receiveMessage);
      });
    });
  };

  receiveMessage = message => {
    this.setState(current => {
      return { messages: [...current.messages, message] };
    });
  };

  messageSubmit = message => {
    socketUtils.emitMessage(message);
  };

  render() {
    const { messages } = this.state;
    return (
      <div className="App">
        <MessageDisplay messages={messages} />
        <MessageInput messageSubmit={this.messageSubmit} />
      </div>
    );
  }
}

export default App;
