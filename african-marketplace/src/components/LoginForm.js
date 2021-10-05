import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const login = () => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match");
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    login();
  };

  const logout = () => {
    console.log("Logout");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Login</h2>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginForm;
