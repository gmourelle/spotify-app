import React, { Component } from "react";
import SearchInput from "./SearchInput";
import ArtistsList from "./ArtistsList";
import { getArtists } from "./../data";
// import { getArtists } from "./../api";
/**<ArtistsList
        artists={artists}
        selectedArtists={this.props.selectedArtists}
        onSelectArtist={this.props.onSelectArtist}
      /> */
const ArtistsPanel = ({ artists }) => {
  //const artists = getArtists();
  //const selectedArtists = [artists[0], artists[2]];
  return (
    <div>
      <SearchInput onSearch={artists} />
    </div>
  );
};

export default ArtistsPanel;
