import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCMTnqnshqbqV9ryS_L62zFyRDXZDCjcJ0',
  authDomain: 'crown-react-1957a.firebaseapp.com',
  databaseURL: 'https://crown-react-1957a.firebaseio.com',
  projectId: 'crown-react-1957a',
  storageBucket: 'crown-react-1957a.appspot.com',
  messagingSenderId: '14391735959',
  appId: '1:14391735959:web:461b0289fae8efaac05bd2',
  measurementId: 'G-J3HHQKMMZK',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
