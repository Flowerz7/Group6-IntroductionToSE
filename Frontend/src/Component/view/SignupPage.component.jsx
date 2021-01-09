import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "regenerator-runtime";
import { useAuth } from "../../contexts/AuthContext.js";

export default function SignupPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push(`/create-profile/${emailRef.current.value}`);
    } catch {
      setError("Fail to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="auth-container">
      <div className="center-container login-card">
        <h1>Signup</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <div className="txt-field">
            <input type="email" ref={emailRef} required />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt-field">
            <input type="password" ref={passwordRef} required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt-field">
            <input type="password" ref={passwordConfirmRef} required />
            <span></span>
            <label>Confirm Password</label>
          </div>
          <button disabled={loading} type="submit" className="btn-primary2">
            Signup
          </button>
          <div className="signup-link">
            Have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
