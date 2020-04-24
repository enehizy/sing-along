import React from 'react';
import {Route,useHistory} from 'react-router-dom';
import NavSearchBar from './NavSearchBar';
function NavBar(){
    const history=useHistory();
    return( <nav>

       <h3 onClick={()=>{history.push('/')}}>Sing Along</h3>
       
       <Route path={['/search','/song']}><NavSearchBar/></Route> 
       
       
      </nav>)
}
export default NavBar;