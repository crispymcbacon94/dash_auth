import React from 'react';
import firebaseConfig from "../firebase";

function User() {
    return (
        <div>
        <h1>Welcome</h1>
        <p>This is the user page, if you can see this you're logged in.</p>
        <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
        </div>
    );
}

export default User;