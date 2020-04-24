import React,{useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';
import LoadingLyrics from './loadingSong';
import SongHeader from './songHeader';
import Reload from './reload';
function SongPage(){
   
const {thumbnail,fulltitle,songid,path}=queryString.parse(useLocation().search)
const [lyrics,setLyrics]=useState("");
const [lyricLoaded,setLyricLoaded]=useState(false)
const [songInfo,setSongInfo]=useState([]);
const [networkError,setNetworkError]=useState(false);
useEffect(()=>{
// fetchSong(songid,setSongInfo);
fetchLyrics(path,setLyrics,setLyricLoaded,setNetworkError);
// fetchSong(songid,setSongInfo)
},[path,songid])
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
const fetchLyrics=(path,setLyrics,setLyricLoaded,setNetworkError)=>{
    setLyricLoaded(false)
    fetch(`http://localhost:5000/path/${path}`)
    .then((response)=>{return response.json()})
    .then((data)=>{
        setNetworkError(false);
        setLyrics(data.lyrics)
        setLyricLoaded(true)
    })
    .catch((err)=>{
        console.log(err);
        setNetworkError(true);
    })
 }

 const fetchSong=(songid,setSongInfo)=>{
     fetch(`http://localhost:5000/songinfo/${songid}`)
     .then((response)=>{return response.json()})
     .then((data)=>{console.log(data.song) ;
        setSongInfo(data.song)})
 }

export default SongPage;