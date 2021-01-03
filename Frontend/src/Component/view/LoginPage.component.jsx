import React from "react";

export default class LoginPage extends React.Component {
  render() {
    return (
      <div className="auth-container">
        <div className="center-container login-card">
          <h1>Login</h1>
          <form action="" method="post">
            <div className="txt-field">
              <input type="text" name="" id="" required />
              <span></span>
              <label>Username</label>
            </div>
            <div className="txt-field">
              <input type="password" name="" id="" required />
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass">Forgot password?</div>
            <button type="submit" className="btn-primary2">
              Login
            </button>
            <div className="signup-link">
              Not a menber? <a href="">Signup</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
