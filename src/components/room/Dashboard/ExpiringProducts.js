import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";

export default function ExpiringProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch();
  }, []);
  const state = useSelector((reduxState) => {
    return {
      expiringProductsList: reduxState.room.expiringProductIds,
    };
  });

  // console.log("the length--------", state.expiringProductsList);

  if (!state.expiringProductsList)
    return (
      <Card className="expiringproductdashboard">
        <h3>Great news! You currently have no expiring products</h3>
      </Card>
    );
  return (
    <Card className="expiringproductdashboard">
      <h3 style={{ textDecoration: "underline" }}>
        The products you need to take immediate care of
      </h3>
      <ul>
        {state.expiringProductsList.map((item) => (
          <h5 className="expirationwarning">
            Your <i style={{ color: "red" }}>{item.deviceName}</i> warranty will
            expire in <i style={{ color: "red" }}>{item.warrantyLeft} days</i>
          </h5>
        ))}
      </ul>
    </Card>
  );
}
