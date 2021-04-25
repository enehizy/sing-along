import React from 'react';
import '../styles/App.css';
import App from '../components/app';
    const MyApp = ({ Component, pageProps }) => (
        <>
       <App>
          <Component {...pageProps} />
       </App>
     
       </>
      );
     export default MyApp; 
