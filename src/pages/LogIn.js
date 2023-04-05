import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/Auth";
import firebaseConfig from "../firebase";
import "./LogIn.css"

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to="/home" />;
  }
  return (
    <>
     <h1>Log In</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label" for="email">Email</label>
        <input className="form-input" type="email" name="email" placeholder="Email" />
        <label className="form-label" for="password">Password</label>
        <input className="form-input" type="password" name="password" placeholder="Password" />
        <div>
        <button className= "form-button" type="submit">Submit</button>
        </div>
      </form>

    </>
  );
};

export default LogIn;