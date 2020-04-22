import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendLogin } from "../../store/user/action";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const state = useSelector((reduxState) => {
    return {
      userState: reduxState.user,
    };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendLogin(loginData));
    setLoginData({
      email: "",
      password: "",
    });
  };

  const history = useHistory();

  if (state.userState.token) history.push("/");
  return (
    <div className="loginsignupmain">
      <h2>Please Login here!</h2>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
      <Form onSubmit={handleSubmit}>
        <Form.Label>EMAIL*</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={setLoginData.email}
          placeholder="Your email"
          onChange={handleChange}
        />
        <Form.Label>PASSWORD*</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={setLoginData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
      <h6 style={{ textAlign: "center" }}>
        Don't have an account yet? <Link to="/signup">CLICK HERE!</Link>{" "}
      </h6>
    </div>
  );
};

export default LoginContainer;
