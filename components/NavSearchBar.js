import React,{useState,useEffect} from 'react';
import {useRouter} from 'next/router';
function NavSearchBar(){
   const [query,setQuery]=useState("");
   const search=()=>{
    if(query.length >= 1){
     location.replace(`/search?q=${query}`)
    }
   }
 

    return(
        <div className="navsearchbar">
            <form onSubmit={(e)=>{
          e.preventDefault();
          search();
        }}>
        <input type="text" placeholder="Enter name or title of song here"   onChange={(e)=>{
          setQuery(e.target.value);
         

        }}/><img src="arrow-left.svg" alt="search icon" className="pointer" onClick={()=>{search()}}/>
      
        </form>
           
       
            </div> 
    )
}
export default NavSearchBar;