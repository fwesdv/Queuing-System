import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

import 'firebase/compat/firestore';
import { db,app } from './firebase';



export const fetchUsers = () => {
  return (dispatch: any) => {
    dispatch({ type: 'FETCH_USERS_START' });

    db
      .collection('users')
      .get()
      .then((querySnapshot) => {
        const users: any[] = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: users });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
      });
  };
};

export const firestore =getFirestore(app)
export const deviceCollection=collection(firestore,"device");
export const serviceCollection=collection(firestore,"service");