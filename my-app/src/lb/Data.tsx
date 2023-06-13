import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { db } from './firebase';



 const docRef=  collection(db,"your-collection");
 export const fetchDataFromFirebase = async () => {
  const docSnap = await getDocs(docRef);
  return docSnap.docs.map((doc) => doc.data());
};
export default fetchDataFromFirebase;

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
