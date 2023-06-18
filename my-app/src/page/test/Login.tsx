import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Login extends Component {
  static propTypes = {}

  render() {
    return (
      <div>Login</div>
    )
  }
}

export default Login
// import React, { useState } from 'react';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from 'firebase/auth';
// import { auth } from '../../lb/firebase';
// import Welcome from './Welcome';
// import SnapshotFirebaseAdvanced from './SnapshotFirebaseAdvanced';


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const register = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         resetInput();
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   const login = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         resetInput();
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   const logOut = () => {
//     signOut(auth);
//   };

//   const resetInput = () => {
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <>
//     <Welcome></Welcome>
//       <h1>Login</h1>
//       <div className="inputBox">
//         <h3>Login/Register</h3>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="password"
//         />
//         <button onClick={register}>Register</button>
//         <button onClick={login}>Login</button>
//         <button onClick={logOut}>Log Out</button>
//       </div>
//       <SnapshotFirebaseAdvanced></SnapshotFirebaseAdvanced>
//     </>
//   );
// };

// export default Login;