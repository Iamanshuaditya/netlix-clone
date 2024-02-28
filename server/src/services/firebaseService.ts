import admin from 'firebase-admin';

const serviceAccount = require('../../src/servicekey.json');
 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/project/netflix-clone-c71e9/database/netflix-clone-c71e9-default-rtdb/data/~2F',
});

const db = admin.firestore();

export { admin, db };
