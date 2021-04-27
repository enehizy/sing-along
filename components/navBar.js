import React from 'react';
import { useRouter} from 'next/router';
import NavSearchBar from './NavSearchBar';

const NavTitle=({children})=>{
    const router=useRouter();
   return(
    <h3 className="pointer"  onClick={()=>{
        router.push('/');
      }} >
          {children}
    </h3>
   ) 
}
function NavBar(){
    return( <nav>

       {/* <h3 onClick={()=>{
         router.push('/');
       }}>Sing Along</h3> */}
       <NavTitle>Sing Along</NavTitle>
       
       <NavSearchBar/>
       
       
      </nav>)
}
export default NavBar;