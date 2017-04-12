import React from 'react';
import QuestionList from './QuestionList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <QuestionList
        questions={this.props.data}
      />
    )
  }
}

export default App;
