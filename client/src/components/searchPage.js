import React,{useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';
import SongCard from './songCard';
import LoadingSongs from './loadingSong';
import Reload from './reload';
function SearchPage(){
    let {q}=queryString.parse(useLocation().search);
    let [songLoaded,setSongloaded]=useState(false);
    let [songsFound,setSongsFound]=useState([]);
    let [networkError,setNetworkError]=useState(false);
    useEffect(()=>{
       
        querySong(q,setSongsFound,setSongloaded,setNetworkError);  
    },[q])
   if(networkError){
       return(<Reload/>)
   }
   if(!songLoaded){
      return (<LoadingSongs title="Songs"/>)
   }
       return(
           <div>
               {songsFound.map((song,index)=>{
                  return(<SongCard key={index} img={song.result.song_art_image_thumbnail_url} title={song.result.title} artistName={song.result.primary_artist.name} fullTitle={song.result.full_title} path={song.result.path} id={song.result.id}/>)
              })}
        
              
           </div>
       )
  

}
const querySong=(query,setSongsFound,setSongloaded,setNetworkError)=>{
    setSongloaded(false);
    fetch(`http://localhost:5000/query?q=${query}`)
      .then((response)=>{
          return response.json()
      })
      .then((data)=>{
          setNetworkError(false);
          
          setSongsFound(data.hits);
          setSongloaded(true);
      })
      .catch((err)=>{
        
       console.log(err);
       setNetworkError(true);
      })

}
export default SearchPage;