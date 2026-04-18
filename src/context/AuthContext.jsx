import { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // signup - creates account and saves user info to firestore
  async function signup(email, password, fullName, phone, city, state, country) {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(result.user);

      // save extra info to firestore
      await setDoc(doc(db, 'users', result.user.uid), {
        fullName,
        email,
        phone,
        city,
        state,
        country,
        createdAt: new Date().toISOString(),
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    setUserProfile(null);
    return signOut(auth);
  }

  async function resendVerification() {
    if (currentUser) {
      return sendEmailVerification(currentUser);
    }
  }

  // get user profile data from firestore
  async function fetchUserProfile(uid) {
    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserProfile(docSnap.data());
        return docSnap.data();
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
    return null;
  }

  // update user profile in firestore
  async function updateProfile(data) {
    if (currentUser) {
      try {
        await setDoc(doc(db, 'users', currentUser.uid), data, { merge: true });
        setUserProfile(prev => ({ ...prev, ...data }));
      } catch (error) {
        console.error('Error updating profile:', error);
        throw error;
      }
    }
  }

  // listen for login/logout changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await fetchUserProfile(user.uid);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    signup,
    login,
    logout,
    resendVerification,
    updateProfile,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
