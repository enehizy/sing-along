import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
function SearchBar(props){
    const [query,changeQuery]=useState('');
    const history =useHistory();
    return(
        <div>
        <h2>Find the Lyrics to your Favourite Songs</h2>
        <p className="poweredbygenius">Powered by Genius.com</p>
        <div className="search-bar">
          <form onSubmit={(e)=>{
            e.preventDefault();
            if(query.length >=3){
              history.push(`/search?q=${query}`);
            }
          }}>
        <input type="text" placeholder="Enter name or title of song here" value={query} onChange={(e)=>{
          changeQuery(e.target.value);
        }}    /><img src="arrow-left.svg" onClick={()=>{
          if(query.length >=3){
            history.push(`/search?q=${query}`);
          }
        }}/>
        </form>
       
        </div>
       
        </div>
    )
}

export default SearchBar;