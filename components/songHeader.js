import React from 'react';

function SongHeader({thumbnail,fulltitle}){
    return( <div className="songheader">
    <div >
    <svg viewBox="0 0 100 100" width="250px" height="250px" className="songimg">
   <clipPath id="myClip">
   
  <circle cx="50" cy="50" r="49.6" />

    </clipPath>
   
    <image clipPath="url(#myClip)" height="100%" width="100%" href={thumbnail} />
    
   </svg>
    {/* <img src={thumbnail}/> */}
    </div>
    <h2>{fulltitle}</h2>
    </div>)
}
export default SongHeader;