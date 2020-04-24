import React from 'react'

function Reload(){
    
    return(<h2 className="reload">There seems to be an error with your network ,check your internet connection,and <span onClick={()=>{window.location.reload()}}>Try again</span></h2>)
}
export default Reload;