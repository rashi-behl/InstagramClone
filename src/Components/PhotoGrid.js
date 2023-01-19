import React, { useState } from "react";
import "../Styles/PhotoGrid.css";

function PhotoGrid() {
  const [photos, setPhotos] = useState([]);

  fetch("http://jsonplaceholder.typicode.com/photos").then((res) => {
    res.json().then(setPhotos);
  });
  return (
    <>
      <div className="main1">
        <div className="navBar">
          <a className="navAnchor">POSTS</a>
          <a className="navAnchor">REELS</a>
          <a className="navAnchor">TAGGED</a>
        </div>
        <div className="photoGrid">
          {photos.map((p) => {
            return (
              <>
                <div key={p.title} className="photoGrid1">
                  <img
                  key = {p.id}
                    className="photos image"
                    src={p.thumbnailUrl}
                  />
                  <div className="middle" key={p.url}>
                    <div className="text">6.2M</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PhotoGrid;
