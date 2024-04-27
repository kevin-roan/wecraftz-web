import { useState } from "react";
import { signIn } from "../Helpers/firebaseAuth.js";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = () => {
    signIn(formData.email, formData.password)
      .then(() => console.log("User signed in"))
      .catch((err) => console.error("Error Signing In", err));
  };

  return (
    <div className="logincard">
      <section>
        <label>Email Adress</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        <p className="text_gray">Forgot Password?</p>
        <button className="login_button" onClick={handleSubmit}>
          Login
        </button>
        <p className="text_gray">
          Don't Have an Account,{" "}
          <span>
            <Link to="/signup">Sign</Link>
            <b> Up</b>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Login;
