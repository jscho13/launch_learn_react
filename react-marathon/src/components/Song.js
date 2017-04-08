import React from 'react';

class Song extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let name = this.props.name;
    let artist = this.props.artist;
    let className = this.props.className;

    return (
      <li className={className} onClick={this.props.handleSelectedSong}>
        { name } - { artist }
      </li>
    );
  }
}

export default Song;
