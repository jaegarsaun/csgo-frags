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
        // Call the signInWithGoogle function from firebase.js
        signInWithGoogle()
            .then((result) => {
                // Get the userID from the firebase user object
                const userID = result.user.uid;
                const findUser = async () => {
                    // Create a request to the server to check if the user is in the database
                    const response = await fetch(`http://localhost:4000/api/users/${userID}`,{method: 'GET'});
                    if (response.ok) {
                        // dont need to do anything because the user is in the database
                        return;        
                    }else if(response.status === 404){
                        // User is not found so create the user
                        // Create the user object
                        const user = {
                            userID: userID,
                            email: result.user.email,
                            displayName: result.user.displayName,
                            role: 'user',
                        };
                        // Create a request to the server
                        const response = await fetch('http://localhost:4000/api/users', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(user),
                        });
                        if (response.ok) {
                            // User created and added to the database
                            console.log('User created');
                        }else{
                            // User not created because there was an error
                            console.log('User not created');
                        }
                    }
                }
                findUser();
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
