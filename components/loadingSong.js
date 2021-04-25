import React from 'react';

function LoadingSongs({title}){
    return(
        <div className="loading">
        <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
       <h3>Loading <p>{title} </p>Please wait...</h3>
      </div> <h3 className="poweredbygenius">Powered by Genius.com</h3></div>
    )
}
export default LoadingSongs;