import React from 'react';
import Body from './Body';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Addressee",
      acceptance: "accepted",
      letter: this.props.data.acceptance_text
    }
    this.letterUpdater = this.letterUpdater.bind(this);
    this.addressUpdater = this.addressUpdater.bind(this);
  };

  addressUpdater(event) {
    let newName = event.target.value;
    this.setState({ name: newName })
  }

  letterUpdater(event) {
    let newLetter = acceptance => {
      if (acceptance === 'accepted') {
        return this.props.data.acceptance_text;
      } else {
        return this.props.data.reject_text;
      }
    }
    this.setState({
      letter: newLetter(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <Header
          addressUpdater={this.addressUpdater}
          letterUpdater={this.letterUpdater}
        />
        <Body
          letter={this.state.letter}
          name={this.state.name}
        />
      </div>
    )
  };
};

export default App;
