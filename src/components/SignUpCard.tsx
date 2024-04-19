const SignUpCard = () => {
  return (
    <div className="signup">
      <div className="signupbox_container">
        <section>
          <label>Name</label>
          <input type="text" />
          <label>Address</label>
          <input type="text" />
          <label>Phone Number</label>
          <input type="text" />
          <label>State</label>
          <input type="text" />
          <label>City</label>
          <input type="text" />
          <label>Pin Code</label>
          <input type="text" />
          <label>Type</label>
          <input type="text" />
          <label>Pin Code</label>
        </section>
        <section>
          <select>
            <option>Raw Materials</option>
            <option>Other Materials</option>
          </select>
          <label>Email Address</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <label>Confirm Password</label>
          <input type="password" />
          <button className="signup_button">Sign Up</button>
          <p className="text_gray">
            Have an Account,{" "}
            <i>
              Log <b>in</b>{" "}
            </i>
          </p>
        </section>
      </div>
    </div>
  );
};
export default SignUpCard;
