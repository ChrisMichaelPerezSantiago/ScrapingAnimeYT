# Scraping AnimeYT WebSite :fire: 😸 (IN PROGRESS)

![alt](https://raw.githubusercontent.com/tanrax/workshop-flask-with-vuejs/master/flaskyvuejs.jpg)
![alt](https://i0.wp.com/gorrion.io/blog/wp-content/uploads/2018/02/Screenshot-at-lut-04-18-11-09.png?resize=700%2C453&ssl=1)

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

**Author**
-----------------
Development Lead

 - Chris M. Perez Santiago   chris.perez@upr.edu | chrisperezsantiago1@gmail.com
