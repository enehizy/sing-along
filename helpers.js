import axios from 'axios';
import cheerio from 'cheerio';
export async function querySong(q){

    const response= await axios(`https://api.genius.com/search?q=${q}`,{
        headers:{
            'Authorization':`Bearer ${process.env.ACCESS_TOKEN}`
        }
    }); 
    return response.data.response.hits;

}

export async function getLyrics(path){
  
        const result=await axios(`https://genius.com/${path}`);
        let $ = cheerio.load(`${result.data}`);
        const lyricInDom=$('.lyrics  > p').html();
        $=cheerio.load(`${lyricInDom}`, {
            xml: {
              normalizeWhitespace: true,
            }})
        
         
        //   console.log({lyrics:$.text()})
          let lyrics=await Promise.all([$.root().text()]);
          lyrics=lyrics[0];
          
    
          if(lyrics === 'null') throw `lyric not found`;
          return `${lyrics}`;
      
}
     
      

export async function findSong(id){

    const response= await axios(`https://api.genius.com/songs/${id}`,{
        headers:{
            'Authorization':`Bearer ${process.env.ACCESS_TOKEN}`
        }
    });
    return response.data.response.song;
   
  
}