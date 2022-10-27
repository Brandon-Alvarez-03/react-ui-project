import React from "react";
import Link from "./Links";
import Playlists from "./Playlists";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top-links">
        <Link />
        <Link />
      </div>
      <div className="bottom-links">
        <Playlists />
      </div>
    </div>
  );
}

export default Sidebar;
