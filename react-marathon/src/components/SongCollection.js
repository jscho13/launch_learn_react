import React from 'react';
import Song from './Song';

class SongCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let songs = this.props.songs.map((song) => {
      let className = ""
      if (song.id == this.props.selectedSong) {
        className = "selected"
      }
      
      const { id } = song
      let handleSelectedSong = () => this.props.handleSelectedSong(id)
      
      return (
        <Song
          key={ song.id }
          name={ song.name }
          artist={ song.artist }
          album={ song.album }
          className={ className }
          handleSelectedSong={ handleSelectedSong }/>
      )
    });

    return (
      <ul>
        {songs}
      </ul>
    );
  }
}

export default SongCollection;
