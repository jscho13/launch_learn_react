import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      questionStatus: "closed",
      qicon: "+",
      answer: ""
    }
    
    this.qToggle = this.qToggle.bind(this);
  }

  qToggle(event) {
    let status = this.state.questionStatus;
    let icon = this.state.qicon;
    let answer = this.state.answer;
    if (status == "closed") {
      icon = "-";
      status = "open";
      answer = this.props.data.answer;
    } else {
      icon = "+";
      status = "closed";
      answer = "";
    }
    this.setState({ questionStatus: status, qicon: icon, answer: answer })
  }

  render() {
    return(
      <div onClick={this.qToggle} style={{paddingLeft: '10px'}}>
        <span>{this.state.qicon}</span>
        <span>{this.props.data.question}</span>
        <div>{this.state.answer}</div>
      </div>
    )
  }
}

export default App;
