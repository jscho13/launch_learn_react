import React from 'react';
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection';

class App extends React.Component {
  constructor(props) {
    super(props);

    let data = this.props.data
    this.state = {
      selectedSongId: data.selectedSongId,
      selectedPlaylistId: data.selectedPlaylistId,
      selectedPlaylistSongs: this.filterSongIds(data.selectedPlaylistId)
    }
    this.handleSongSelect = this.handleSongSelect.bind(this);
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this);
  }
  
  handleSongSelect(id) {
    this.setState({ selectedSongId: id })
  }

  handlePlaylistSelect(id) {
    this.setState({ selectedPlaylistId: id,
                    selectedSongId: this.props.data.playlists[id-1].songs[0],
                    selectedPlaylistSongs: this.filterSongIds(id)
                  })
  }
  
  filterSongIds(playlistId) {
    let data = this.props.data
    
    let selectedPlaylistSongIds = data.playlists[playlistId-1].songs;
    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }
    let selectedPlaylistSongs = data.songs.filter(filterById);
    return selectedPlaylistSongs;
  }

  render() {
    return (
      <div className="App row">
        <div className="small-6 columns">
          <h4>Playlist Header Section</h4>
          <PlaylistCollection
            playlists={ this.props.data.playlists }
            selectedPlaylist={ this.state.selectedPlaylistId }
            handleSelectedPlaylist= { this.handlePlaylistSelect }/>
          <hr/>
          <SongCollection
            songs={ this.state.selectedPlaylistSongs }
            selectedSong={ this.state.selectedSongId }
            handleSelectedSong= { this.handleSongSelect }/>
        </div>
      </div>
    );
  }
}

export default App;
