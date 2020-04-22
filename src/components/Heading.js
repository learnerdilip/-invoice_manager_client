import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppFeaures from "./AppFeaures";

export default function Heading() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({
      type: "CLEAR_USER_DATA",
    });
  };

  const state = useSelector((reduxState) => reduxState.user.name);

  return (
    <div>
      <Navbar bg="warning" variant="light">
        <Navbar.Brand href="/">
          {/* <i style={{ display: "inline-block" }} class="fa fa-archive"></i> */}
          <h1 style={{ fontFamily: "Monoton" }}>WARRANTY MANAGER</h1>
        </Navbar.Brand>
        {state && <h6> USER: {state} </h6>}
        <Link to="/about">
          <h6>ABOUT APP</h6>
        </Link>

        <div className="loginsignupinnav">
          <Link onClick={handleLogout} to="/">
            LOGOUT
          </Link>
          <Link to="/login">LOGIN</Link>
          <Link to="/signup">SIGNUP</Link>
        </div>
      </Navbar>
    </div>
  );
}
