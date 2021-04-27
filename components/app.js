import React,{useEffect} from 'react';
import Head from 'next/head';
import NavBar from './navBar';


function App({children}) {
  return (
  <>
  <Head>
    <title>Sing Along</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon"/>
   <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
  </Head>
      <NavBar/>
      {children}
      
    </>
  );
}

export default App;
