# Scraping AnimeYT WebSite :fire: 😸 (IN PROGRESS)

**Set up Cloud Storage**
In the server folder create a file with the configuarion of Cloud Storage.

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
