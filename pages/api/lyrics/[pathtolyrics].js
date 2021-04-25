import cheerio from 'cheerio';
import axios from 'axios';
export default async (req,res)=>{
    const {pathtolyrics}=req.query;
    if(pathtolyrics){
        res.json({pathtolyrics})
        try{
            //    const response=await axios(req.path)
              
                // await getLyricsFromPath(`/${req.query.pathtolyrics}`).then(lyrics => res.status(200).json({'lyrics':lyrics}))
            }
            catch(e){
                console.log(e);
            }
    }
    
  
}



