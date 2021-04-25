import React from 'react';
import axios from 'axios';
import SongCard from '../components/songCard';
import Reload from '../components/reload';
function search({songs, error}){
   if(error){
       return(<Reload/>)
   }
       return(
           <div>
               {songs.map((song,index)=>{
                  return(<SongCard key={index} img={song.result.song_art_image_thumbnail_url} title={song.result.title} artistName={song.result.primary_artist.name} fullTitle={song.result.full_title} path={song.result.path} id={song.result.id}/>)
              })}
        
              
           </div>
       )
  

}

export const getServerSideProps=async (context)=>{
    const {q} =context.query;  
    try{ 
     const result= await axios(`api/search?q=${q}`);
     return{
        props:{
            songs:result.data,
            error:false
        }
    }
                
    }
    catch(e){
       return{
           props:{
             error:true
            
           }
       }
    }
 
}

export default search;