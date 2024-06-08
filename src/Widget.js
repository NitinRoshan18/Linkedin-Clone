import React from "react";
import "./Widget.css"
import InfoIcon from "@mui/icons-material/Info";

function Widget() {
  return (
    <div className="widget">
      <div className="widget_top">
        <span>
          <h2>LinkedIn News</h2> <InfoIcon />
        </span>
        <h5>Top Stories</h5>
        <p>
          <strong>Elections 2024: NDA retains majority</strong>
          <small>Top News • 25,531 readers</small>
        </p>
        <p>
          <strong>Freshers in demand at these firms</strong>
          <small>1d ago • 3,464 readers</small>
        </p>
        <p>
          <strong>Startup investors shift strategy</strong>
          <small>1d ago • 1,585 readers</small>
        </p>
        <p>
          <strong>Banks battle rising fraud</strong>
          <small>1d ago • 933 readers</small>
        </p>
      </div>
    </div>
  );
}

export default Widget;
