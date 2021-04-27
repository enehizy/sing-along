import React,{useState} from 'react';
import Link from 'next/link';
function SearchBar(props){

  const [query,setQuery]=useState("");
 const search=()=>{
  if(query.length >= 1){
    location.replace(`/search?q=${query}`)
    
  }
 }
    return(
        <div>
        <h2>Find the Lyrics to your Favourite Songs</h2>
        <p className="poweredbygenius">Powered by Genius.com</p>
        <div className="search-bar">
        <form onSubmit={(e)=>{
          e.preventDefault();
          search();
        }}>
        <input type="text" placeholder="Enter name or title of song here" value={query} onChange={(e)=>{
          setQuery(e.target.value);
         

        }}/> 
         <img src="arrow-left.svg" alt="search icon" className="pointer" onClick={()=>{search()}}/>
        
        </form>
       
       
       
       
        </div>
       
        </div>
    )
}

export default SearchBar;