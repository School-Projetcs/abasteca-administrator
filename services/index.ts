import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const clientCredentials = {
  apiKey: "AIzaSyA7kmV01gVAPhdc_hk2M1N3BszZzhzToNk",
  authDomain: "abasteca-startup.firebaseapp.com",
  databaseURL: "https://abasteca-startup-default-rtdb.firebaseio.com",
  projectId: "abasteca-startup",
  storageBucket: "abasteca-startup.appspot.com",
  messagingSenderId: "150417801240",
  appId: "1:150417801240:web:b5c8da13e76791a783836d"
};

export const firebaseInit = () => {
    try {
        if (!firebase.apps.length) {
            firebase.initializeApp(clientCredentials);
        }
    } catch (error) {
        //
    }
};

const auth = () => firebase.auth(firebase.app());
const database = () => firebase.database(firebase.app());

const getDbRef = (query: string) => database().ref(query);

export { firebase, auth, database, getDbRef };
