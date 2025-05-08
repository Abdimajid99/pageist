import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../configs/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  signUpWithEmail,
  signInWithEmail,
  signInWithGoogle,
  logout,
} from "../services/authService";

type UserType = User | null;

type AuthContextType = {
  user: UserType;
  signUpWithEmail: (email: string, password: string) => void;
  signInWithEmail: (email: string, password: string) => void;
  signInWithGoogle: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        //redirect user to sign in page
      }
    });

    // clean up function to unsub from onAuthStateChanged listener on unmount
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signUpWithEmail,
        signInWithEmail,
        signInWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
}
