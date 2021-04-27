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
        let $ = cheerio.load(result.data);
        $=cheerio.load($('.lyrics  > p').html(), {
            xml: {
              normalizeWhitespace: true,
            }})
          const lyrics=$.root().text();
          return `${lyrics}`;
      
}
     
      

export async function findSong(id){
   try{
    const response= await axios(`https://api.genius.com/songs/${id}`,{
        headers:{
            'Authorization':`Bearer ${process.env.ACCESS_TOKEN}`
        }
    });
    return response.data.response.song;
   }
   catch(e){
       throw `${e}`;
   }
}