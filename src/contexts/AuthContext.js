import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, signInWithGoogle, signOut } from '../firebase';


// Create the context
const AuthContext = createContext();

// Create a custom hook to use the context
export const useAuth = () => {
    return useContext(AuthContext);
};

// Create the provider component
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to handle the sign-in with Google
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result);

               // make a call to the backend to consolelog all users

               const fetchData = async () => {
                try {
                  const response = await fetch(`http://localhost:5050/src/server/routes/user`);
                  if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                  } else {
                    console.log("Error:", response.statusText);
                  }
                } catch (error) {
                  console.log("Error:", error);
                }
              };
              
              fetchData();


               



            
            })
            .catch((error) => {
                alert('Error Signing In');
                console.log(error);
            });
    };

    // Function to handle the sign-out
    const handleSignOut = () => {
        signOut()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                alert('Error Signing Out');
                console.log(error);
            });
    };



    useEffect(() => {
        // Subscribe to changes in the authentication state
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setLoading(false);
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    // Create the value object for the context
    const value = {
        currentUser,
        signInWithGoogle: handleSignInWithGoogle,
        signOut: handleSignOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
