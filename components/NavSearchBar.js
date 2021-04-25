import React,{useState,useEffect} from 'react';
import {useRouter} from 'next/router';
function NavSearchBar(){
   const router=useRouter();
   const [query,setQuery]=useState("");
   const search=()=>{
    if(query.length >= 3){
      router.push(`/search?q=${query}`)
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
         

        }}/><img src="arrow-left.svg" alt="search icon" onClick={()=>{search()}}/>
      
        </form>
           
       
            </div> 
    )
}
export default NavSearchBar;