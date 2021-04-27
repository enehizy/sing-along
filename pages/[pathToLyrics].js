import React,{useEffect,useState} from 'react';;
import SongHeader from '../components/songHeader';
import Reload from '../components/reload';
import {getLyrics,findSong} from '../helpers';

export default function song({thumbnail,fulltitle,lyrics,error}){
    if(error){
        return(<Reload/>)
    }



    return(
       
        <div className="songcont">
       <SongHeader thumbnail={thumbnail} fulltitle={fulltitle}/>
        <h2 className="lyrics">{lyrics}</h2>
        </div>
   
    )

 
}


export const getServerSideProps= async (context)=>{
    try{
        const {id,pathToLyrics}=context.query;
    
        const song= await findSong(id);
        // console.log(song)
        const lyrics = await  getLyrics(pathToLyrics);
      
       
        return{
            props:{
                thumbnail:`${song.header_image_thumbnail_url}`,
                fulltitle:`${song.full_title}`,
                lyrics,
                error:false
            }
        }
    }
    catch(e){
        // console.log(e);
        return{
            props:{
               error:true
            }
        } 
    }
   
    
}
