### Sing Along
A simple webapp for finding lyrics to any song,
This app was made with react and node js
### requirements
yarn package manger and nodejs
### **Setup**
* first in the project directory **yarn install**
to install all server dependencies
* **cd client** && **yarn install**
to install react dependencies
* get api key for genius(the music website)
* put api key in config/index.html 
```javaScript 
module.exports={
    GENIUS_CLIENT_ACCESS_TOKEN:'API_KEY_GOES_HERE'
}
```

* **yarn startBoth** to start both client and server
_check package.json for other commands_
