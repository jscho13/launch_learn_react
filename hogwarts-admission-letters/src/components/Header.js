import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="row" style={{textAlign: 'center'}}>
        <h4>Addressee</h4>
        <input onChange={this.props.addressUpdater} style={{width: '100px', margin: 'auto'}} type="text"></input>
        <button value="accepted" onClick={this.props.letterUpdater} style={{padding: '20px', background: 'green'}}>Accepted</button>
        <button value="rejected" onClick={this.props.letterUpdater} style={{padding: '20px', background: 'red'}}>Rejected</button>
      </div>
    )
  };
};

export default Header;
