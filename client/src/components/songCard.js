import React from 'react';
import {Link} from 'react-router-dom';
function SongCard({img,title,artistName,fullTitle,path,id}){
    return(
        <div className="songcard">
               <div className="songcardimage"><img src={img}/></div>
               <div className="songcardinfo">
                    <h3>{title}</h3>
                    <h6>{artistName}</h6>
                  {/* <button className="gotolyricbutton">go to lyr</button> */}
                  <Link to={`/song?songid=${id}&path=${path.split("/")[1]}&fulltitle=${fullTitle}&thumbnail=${img}`}><button className="gotobutton">View Lyrics</button></Link>
                  
               </div>
              </div>
    )

}
export default SongCard;