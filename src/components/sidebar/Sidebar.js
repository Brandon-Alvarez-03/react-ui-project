import React from "react";
import Links from "./Links";
import Playlists from "./Playlists";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top-links">
        <Links />
        <Links />
      </div>
      <div className="bottom-links">
        <Playlists />
      </div>
    </div>
  );
}

export default Sidebar;
