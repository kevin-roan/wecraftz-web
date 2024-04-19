const Login = () => {
  return (
    <div className="logincard">
      <section>
        <label>Email Adress</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
        <p className="text_gray">Forgot Password?</p>
        <button className="login_button">Login</button>
        <p className="text_gray">
          Don't Have an Account,{" "}
          <span>
            Sign<b> Up</b>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Login;
