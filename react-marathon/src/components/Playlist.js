import React from 'react';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let name = this.props.name;
    let className = this.props.className;
    
    return (
      <li className={ className } onClick={this.props.handleSelectedPlaylist}>
        { name }
      </li>
    );
  }
}

export default Playlist;
