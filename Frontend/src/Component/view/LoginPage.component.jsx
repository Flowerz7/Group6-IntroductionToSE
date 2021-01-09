import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "regenerator-runtime";
import { useAuth } from "../../contexts/AuthContext.js";

export default function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Fail to login");
    }

    setLoading(false);
  }

  return (
    <div className="auth-container">
      <div className="center-container login-card">
        <h1>Login</h1>
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
          <Link to="/forgot-password" className="pass">
            Forgot password?
          </Link>
          <button disabled={loading} type="submit" className="btn-primary2">
            Login
          </button>
          <div className="signup-link">
            Not a member? <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
