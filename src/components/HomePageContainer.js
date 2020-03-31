import React from "react";
import RoomContainer from "./room/RoomContainer";
import { Button } from "react-bootstrap";

const HomePageContainer = () => {
  

  return (
    <div className="homepage">
      <h2>Manage your Warranty and Invoices</h2>
      {/* <Button onClick={onSignIn}>GET GOOGLE DATA</Button> */}
      <RoomContainer />
    </div>
  );
};

export default HomePageContainer;
