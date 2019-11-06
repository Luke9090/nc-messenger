import React, { PureComponent } from 'react';
import './App.css';
import * as db from './utils/db';
import * as sockets from './utils/sockets';
import MessageDisplay from './Components/MessageDisplay';
import MessageInput from './Components/MessageInput';

class App extends PureComponent {
  state = {
    messages: []
  };

  componentDidMount = () => {
    db.getStoredMessages().then(messages => {
      this.setState({ messages }, () => {
        sockets.subscribeToMessages(this.receiveMessage);
      });
    });
  };

  receiveMessage = message => {
    this.setState(current => {
      return { messages: [...current.messages, message] };
    });
  };

  messageSubmit = message => {
    console.log(message);
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
