import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { signOut } from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth();
let user;

if (user) {
  console.log("user is present");
}

const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user;
        console.log("wholesaler loggedin");
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("user authentication failed");
        console.log(errorCode, errorMessage);
        reject(error);
      });
  });
};

const signOutCurrentUser = () => {
  signOut(auth)
    .then(() => {
      window.alert("User Signed Out");
    })
    .catch((error) => console.log(error));
};

const createNewAccount = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(`Created New User`);
      const user = userCredential.user;
      console.log(`User`, user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error Creating New user`, errorCode, errorMessage);
      // ..
    });
};

export { signIn, signOutCurrentUser, user, createNewAccount };
