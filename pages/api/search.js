import axios from 'axios';
export default async (req,res)=>{
 try{
   const {q}= req.query;
    const response= await axios(`https://api.genius.com/search?q=${q}`,{
        headers:{
            'Authorization':`Bearer ${process.env.ACCESS_TOKEN}`
        }
    });
   res.json({
       songs:response.data.response.hits
   })

 }
 catch(e){
    res.json({
        error:e
    })
 }
 

}