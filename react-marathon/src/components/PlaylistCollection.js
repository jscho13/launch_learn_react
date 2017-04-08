import React from 'react';
import Playlist from './Playlist';

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let playlists = this.props.playlists.map((playlist) => {
      let className = ""
      if (playlist.id == this.props.selectedPlaylist) {
        className = "selected"
      }

      const { id } = playlist
      let handleSelectedPlaylist = () => this.props.handleSelectedPlaylist(id)

      return (
        <Playlist
          key={ playlist.id }
          name={ playlist.name }
          songs={ playlist.songs }
          className={ className }
          handleSelectedPlaylist={ handleSelectedPlaylist }/>
      )
    });

    return (
      <ul>
        {playlists}
      </ul>
    );
  }
}

export default PlaylistCollection;
