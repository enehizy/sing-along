import React,{useEffect} from 'react';
import Head from 'next/head';
import NavBar from './navBar';


function App({children}) {
  return (
  <>
  <Head>
    <title>Sing Along</title>
  </Head>
      <NavBar/>
      {children}
      
    </>
  );
}

export default App;
