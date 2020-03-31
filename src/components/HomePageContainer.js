import React from "react";
import RoomContainer from "./room/RoomContainer";
import { Button } from "react-bootstrap";

const HomePageContainer = () => {
  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  return (
    <div className="homepage">
      <h2>Manage your Warranty and Invoices</h2>
      <Button onClick={onSignIn}>GET GOOGLE DATA</Button>
      <RoomContainer />
    </div>
  );
};

export default HomePageContainer;
