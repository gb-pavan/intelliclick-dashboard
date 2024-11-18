import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

// // Firebase config
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: ""
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const GoogleLogin = () => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (person) => {
  //     if (person) {
  //       setUser(person);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);

  // const signInWithGoogle = async () => {
  //   try {
  //     await signInWithPopup(auth, new GoogleAuthProvider());
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      {/* <center>
        {user ? (
          <div>
            <h1>Welcome to home page</h1>
            <button>Sign Out</button>
          </div>
        ) : (
          <button>Sign In With Google</button>
        )}
      </center> */}

      <div>
        <div>
          image
        </div>
        <div>
          <img src="./logo.svg"/>
          <button>Login with Intelliclick</button>
        </div>
      </div>
    </div>
  );
};

export default GoogleLogin;
