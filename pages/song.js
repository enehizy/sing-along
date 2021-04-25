import React,{useEffect,useState} from 'react';;
import LoadingLyrics from '../components/loadingSong';
import SongHeader from '../components/songHeader';
import Reload from '../components/reload';

export default function song(){
    
const [lyrics,setLyrics]=useState("");
const [lyricLoaded,setLyricLoaded]=useState(false)
const [songInfo,setSongInfo]=useState([]);
const [networkError,setNetworkError]=useState(false);
if(networkError){
    return(<Reload/>)
}
if(lyricLoaded){
    return(
       
        <div className="songcont">
       <SongHeader thumbnail={thumbnail} fulltitle={fulltitle}/>
        <h2 className="lyrics">{lyrics}</h2>
        </div>
   
    )
}

    return(<LoadingLyrics title='Lyrics'/>);

 
}
