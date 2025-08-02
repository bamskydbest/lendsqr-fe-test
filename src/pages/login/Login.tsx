import "./Login.scss";
import logo from "../../assets/Group.svg";
import illustration from "../../assets/pablo-sign-in 1.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("token", "loggedin");
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div>
      <div className="logo-parent">
        <img src={logo} alt="Lendsqr Logo" className="logo" />
      </div>
      <div className="login-container">
        <div className="login-left">
          <img src={illustration} alt="Illustration" className="illustration" />
        </div>
        <div className="login-right">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="toggle">SHOW</span>
            </div>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
            <button type="submit" className="login-btn">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
