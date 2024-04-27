import { useState } from "react";
import { createNewAccount } from "../Helpers/firebaseAuth.js";
import { Link } from "react-router-dom";

const SignUpCard = () => {
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    phonenumber: "",
    state: "",
    city: "",
    pincode: "",
    type: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSignUpClick = () => {
    console.log(formData.email, formData.password);
    createNewAccount(formData.email, formData.password).then(() =>
      console.log("user singed in succesfully")
    );
  };
  return (
    <div className="signup">
      <div className="signupbox_container">
        <section>
          <label>Name</label>
          <input type="text" id="username" onChange={handleChange} />
          <label>Address</label>
          <input type="text" id="address" onChange={handleChange} />
          <label>Phone Number</label>
          <input type="text" id="phonenumber" onChange={handleChange} />
          <label>State</label>
          <input type="text" id="state" onChange={handleChange} />
          <label>City</label>
          <input type="text" id="city" onChange={handleChange} />
          <label>Pin Code</label>
          <input type="text" id="pincode" onChange={handleChange} />
        </section>
        <section>
          <select id="type">
            <option>Raw Materials</option>
            <option>Other Materials</option>
          </select>
          <label>Email Address</label>
          <input type="email" id="email" onChange={handleChange} />
          <label>Password</label>
          <input type="password" id="password" onChange={handleChange} />
          <label>Confirm Password</label>
          <input type="password" id="password" onChange={handleChange} />
          <button className="signup_button" onClick={handleSignUpClick}>
            Sign Up
          </button>
          <p className="text_gray">
            Have an Account,{" "}
            <i>
              <Link to="/login">Log</Link>
              <b>in</b>{" "}
            </i>
          </p>
        </section>
      </div>
    </div>
  );
};
export default SignUpCard;
