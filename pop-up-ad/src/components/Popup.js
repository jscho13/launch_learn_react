import React from 'react';

class Popup extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      clickCount: 0
    }
    
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleClick(event) {
    let newClickCount = this.state.clickCount + 1;
    if (newClickCount == 3) {
      alert("Are you sure?");
      newClickCount = 0;
    }
    this.setState({ clickCount: newClickCount });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
  }

  render() {    
    return(
      <div>
        <form>
          <div className="test"><h4>You have won tickets to see {this.props.artistName}!!</h4></div>
          <div><h5>Please enter your email so we can send you two tickets</h5></div>
          <div onClick={this.handleClick}>Close me</div>
          <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
        </form>
      </div>
    );
  }
};

export default Popup;
