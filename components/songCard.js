import React from 'react';

function SongCard({img,title,artistName,fullTitle,path,id}){
    return(
        <div className="songcard">
               <div className="songcardimage"><img src={img}/></div>
               <div className="songcardinfo">
                    <h3>{title}</h3>
                    <h6>{artistName}</h6>
                  {/* <button className="gotolyricbutton">go to lyr</button> */}
                 <button className="gotobutton">View Lyrics</button>
                  
               </div>
              </div>
    )

}
export default SongCard;