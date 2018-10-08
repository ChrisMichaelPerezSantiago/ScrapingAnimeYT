# Scraping AnimeYT WebSite :fire: 😸 (IN PROGRESS) + FeathersJS

![alt](https://raw.githubusercontent.com/tanrax/workshop-flask-with-vuejs/master/flaskyvuejs.jpg)
![alt](https://cdn-images-1.medium.com/max/1200/1*5d2EDhCZcUWKbaVjRCq9Vg.png)

**Front-End**
- Vuejs/Vuex

**Back-End**
- Nodejs
- Python (Flask)

**Middleware**
- FeathersJS

**Module** 
[cheerio](https://cheerio.js.org/)

**Set up Cloud Storage**
In the server folder create a file with the configuration of Cloud Storage.

```javascript
const firebase = require('firebase');
require('firebase/firestore');

var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

module.exports = db;
```

**Connection between feathersjs and the client**
Create feathers-vuex.js file in client/src and add this scripts ...

```javascript
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';
import io from 'socket.io-client';

const socket = io('http://localhost:3030', {transports: ['websocket']});
const feathersClient = feathers()
  .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage }))

  export default feathersClient;
```

**Author**
-----------------
Development Lead

 - Chris M. Perez Santiago   chris.perez@upr.edu | chrisperezsantiago1@gmail.com
