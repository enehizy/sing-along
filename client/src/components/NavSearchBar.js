import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
function NavSearchBar(){
    const [query,setQuery]=useState('');
    const history=useHistory();
    return(
        <div className="navsearchbar">
              <form onSubmit={(e)=>{
            e.preventDefault();
            if(query.length >=3){
              history.push(`/search?q=${query}`);
            }
          }}>
            <input type="text" placeholder="Enter name or title of song here" value={query} onChange={(e)=>{setQuery(e.target.value)}}  /><img src="arrow-left.svg" onClick={()=>{
          if(query.length >=3){
            history.push(`/search?q=${query}`);
          }
        }}/>
        </form>
            </div> 
    )
}
export default NavSearchBar;