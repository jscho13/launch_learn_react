import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qicon: "+",
      className: "hide"
    }
    this.qToggle = this.qToggle.bind(this);
  }

  qToggle() {
    let qicon = this.state.qicon;
    let className = this.state.className;
    if (qicon === "+") {
      qicon = "-";
      className = "show";
    } else {
      qicon = "+";
      className = "hide";
    }
    this.setState({ qicon: qicon, className: className })
  }

  render() {
    return(
      <li>
        <div onClick={this.qToggle} style={{paddingLeft: '10px'}}>
          <span>{this.state.qicon}</span>
          <span style={{paddingLeft: '10px'}}>{this.props.question}</span>
          <div className={this.state.className}>{this.props.answer}</div>
        </div>
      </li>
    );
  }
};

export default Question;
