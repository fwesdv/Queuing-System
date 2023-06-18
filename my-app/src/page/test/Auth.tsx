import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Auth extends Component {
  static propTypes = {}

  render() {
    return (
      <div>Auth</div>
    )
  }
}

export default Auth
// import { User, onAuthStateChanged } from 'firebase/auth';
// import React, { ReactNode, useEffect, useState } from 'react';
// import { auth } from '../../lb/firebase';

// interface AuthContextProps {
//     currentUser: User | null;
//   }
// export const AuthContext = React.createContext<AuthContextProps | null>(null);
// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState<User | null>(null as User | null);

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//   }, []);

//   if (loading) {
//     return (
//       <div
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '80vh',
//         }}
//       >
//         <h1>Loading User...</h1>
//       </div>
//     );
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };