import React from "react";
import TP from "./Top-Playlist.jsx";
import SongRow from "./Song-Row.jsx";

function Main() {
  return (
    <div className="main">
      <div className="top-6-container">
        <p className="greeting">Good Evening</p>
        <div className="top-6">
          <TP title={"Playlist 1"} />
          <TP title={"Playlist 2"} />
          <TP title={"Playlist 3"} />
          <TP title={"Playlist 4"} />
          <TP title={"Playlist 5"} />
          <TP title={"Playlist 6"} />
        </div>
      </div>
      <div className="song-card-container">
        <p className="recommendation">Songs you might like</p>
        <div className="songs">
          <SongRow />
          <SongRow />
          <SongRow />
        </div>
      </div>
    </div>
  );
}

export default Main;
